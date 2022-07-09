import type { NextPage } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import { useSession } from "next-auth/react"
import Login from '../components/Login'
import SideBar from '../components/SideBar'
import Feed from '../components/Feed'
import Widgets from '../components/Widgets'

const Home: NextPage = () => {
  const { data: session } = useSession()

  if(!session) return <Login />

  return (
    <div className='bg-gray-100 h-screen overflow-hidden'>
      <Head>
        <title>kw's Facebook</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header />
      </header>

      <main className='flex '>
        <SideBar />
        <Feed />
        <Widgets />
      </main>
    </div>
  )
}

export default Home
