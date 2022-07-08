import type { NextPage } from 'next'
import { GetServerSideProps, InferGetServerSidePropsType  } from 'next'
import Head from 'next/head'
import Header from '../components/Header'
import { useSession } from "next-auth/react"
import Login from '../components/Login'

const Home: NextPage = () => {
  const { data: session } = useSession()

  if(!session) return <Login />

  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header>
        <Header />
      </header>

      <main></main>
    </div>
  )
}

export default Home
