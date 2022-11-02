import Head from 'next/head'
import { GlobalStyle } from './api/StyledComponents'
import Blender from './Blender'
import Header from './Header'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Blender app</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Jwplayer Blender Preview App" />
        <meta property="og:url" content='https://cdn.jwplayer.com/v2/media/h7pkBUcC/poster.jpg?width=720' />
        <meta property="og:type" content="website" />
        <meta property="og:title" content='Jwplayer Blender app' />
        <meta property="og:description" content="Jwplayer Blender Preview App" />
        <meta property="og:image" content='https://assets-jpcust.jwpsrv.com/thumbnails/9pndcdhu-720.jpg' />
      </Head>

      <main>
        <Blender />
      </main>
    </div>
  )
}
