import React from 'react'
import Head from 'next/head'
import { Content } from '../components/Content'

type Props = {
}

const Home: React.FC<Props> = () => (
  <div>
    <Head>
      <title>Home</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>

    <Content />
  </div>
)

export default Home
