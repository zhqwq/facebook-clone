import { EmojiHappyIcon } from '@heroicons/react/outline'
import { CameraIcon, VideoCameraIcon } from '@heroicons/react/solid'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { ChangeEvent, MouseEvent, useRef, useState } from 'react'
import { doc, collection, addDoc, setDoc, serverTimestamp } from 'firebase/firestore'
import { ref, uploadString, getDownloadURL } from 'firebase/storage'
import { db, storage } from '../firebase'

const InputBox = () => {
  const { data: session } = useSession()
  const inputRef = useRef<HTMLInputElement>(null)
  const filepickerRef = useRef<HTMLInputElement>(null)
  const [imageToPost, setImageToPost] = useState<string | ArrayBuffer | null>(null)

  const sendPost = async (e: MouseEvent) => {
    e.preventDefault()

    if (!inputRef?.current?.value) return

    try {
      // 向firestore(NoSQL)的posts集合写入文档
      const docRef = await addDoc(collection(db, 'posts'), {
        message: inputRef.current.value,
        name: session?.user?.name,
        email: session?.user?.email,
        image: session?.user?.image,
        timestamp: serverTimestamp()
      })
      
      if (imageToPost) {
        // 上传base64编码图片到storage (上传图片之前需要在Rules中开启读写权限)
        const storageRef = ref(storage, `posts/${docRef.id}`)
        await uploadString(storageRef, imageToPost as string, 'data_url')

        removeImage()
        
        // 从storage中获取URL并更新对应的doc
        getDownloadURL(storageRef).then(async url => {
          const postRef = doc(db, 'posts', docRef.id)
          await setDoc(postRef, { postImage: url }, { merge: true })
        })
      }

      console.log('Document written with ID: ', docRef.id)
    } catch (e) {
      console.error('Error adding document: ', e)
    }

    inputRef.current.value = ''
  }

  const addImageToPost = (e: ChangeEvent) => {
    const reader = new FileReader()

    const target = e.target as HTMLInputElement
    const file = (target.files as FileList)[0]

    if (file) {
      reader.readAsDataURL(file)
    }

    reader.onload = readerEvent => {
      setImageToPost(readerEvent.target!.result)
    }
  }

  const removeImage = () => {
    setImageToPost(null)
  }

  return (
    <div className="bg-white p-2 rounded-2xl shadow-md text-gray-500 font-medium mt-6">
      <div className="flex space-x-4 p-4 items-center">
        <Image className="rounded-full" src={session?.user?.image || '/default_avatar.png'} width={40} height={40} layout="fixed" />
        <form className="flex flex-1">
          <input ref={inputRef} className="h-12 rounded-full bg-gray-100 flex-grow px-5 focus:outline-none" type="text" placeholder={`What's on your mind, ${session?.user?.name}`} />
          <button hidden type="submit" onClick={(e) => sendPost(e)}>
            Submit
          </button>
        </form>
        {imageToPost && (
          <div onClick={removeImage} className="flex flex-col filter hover:brightness-110 transition duration-150 transform hover:scale-105 cursor-pointer">
            <img src={imageToPost as string} className="h-10 object-contain " />
            <p className="text-xs text-red-500 text-center">Remove</p>
          </div>
        )}
      </div>

      <div className="flex justify-evenly p-3 border-t">
        <div className="inputIcon">
          <VideoCameraIcon className="h-7 text-red-500" />
          <p className="text-xs sm:text-sm xl:text-base">Live Video</p>
        </div>

        <div onClick={() => filepickerRef.current!.click()} className="inputIcon">
          <CameraIcon className="h-7 text-green-400" />
          <p className="text-xs sm:text-sm xl:text-base">Phone/Video</p>
          <input ref={filepickerRef} onChange={addImageToPost} type="file" hidden />
        </div>

        <div className="inputIcon">
          <EmojiHappyIcon className="h-7 text-yellow-300" />
          <p className="text-xs sm:text-sm xl:text-base">Feeling/Activity</p>
        </div>
      </div>
    </div>
  )
}

export default InputBox
