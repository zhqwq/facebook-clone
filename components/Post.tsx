import { ChatAltIcon, ShareIcon, ThumbUpIcon } from '@heroicons/react/outline'
import { Timestamp } from 'firebase/firestore'
import Image from 'next/image'
import React from 'react'

interface Props {
  name: string
  message: string
  email: string
  timestamp: Timestamp
  image: string
  postImage: string
}

const Post = ({ name, message, email, timestamp, image, postImage }: Props) => {
  return (
    <div className="flex flex-col">
      <div className="p-5 bg-white mt-5 rounded-t-2xl shadow-sm">
        <div className="flex items-center space-x-2">
          <img className="rounded-full" src={image} width={40} height={40} />
          <div>
            <p className="font-medium">{name}</p>
            <p className="text-xs text-gray-400">{new Date(timestamp?.toDate()).toLocaleString()}</p>
          </div>
        </div>
        <p className="pt-4">{message}</p>
      </div>

      {postImage && (
        <div className="relative h-56 md:h-96 bg-white">
          <Image src={postImage} objectFit="cover" layout="fill" />
        </div>
      )}

      <div className="flex justify-between items-center rounded-b-2xl bg-white shadow-md text-gray-400 border-t">
        <div className='inputIcon rounded-none rounded-bl-2xl'>
          <ThumbUpIcon className="h-4" />
          <p className="text-xl sm:text-base">Like</p>
        </div>
        <div className='inputIcon rounded-none'>
          <ChatAltIcon className="h-4" />
          <p className="text-xl sm:text-base">Comment</p>
        </div>
        <div className='inputIcon rounded-none rounded-br-2xl'>
          <ShareIcon className="h-4" />
          <p className="text-xl sm:text-base ">Share</p>
        </div>
      </div>
    </div>
  )
}

export default Post
