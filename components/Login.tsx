import Image from 'next/image'
import { signIn } from 'next-auth/react'

const Login = () => {
  return (
    <div className="grid place-items-center">
      <Image src="/facebook-logo.png" height={400} width={400} objectFit="contain" />
      <h1 onClick={() => signIn()} className="p-5 bg-blue-500 rounded-full text-white cursor-pointer">
        Login with Facebook / Google / Github
      </h1>
      <h1 className='mt-20 text-gray-700'>Not compatible with Safari</h1>
    </div>
  )
}

export default Login
