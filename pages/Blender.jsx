import Head from 'next/head';
import Image from 'next/image';
import { BlurBgImage, DynamicBlur, HomeMain } from './api/StyledComponents';
import Banner from './component/Banner';
import LandingPage from './component/LandingPage';

function Blender(props) {

  const structureJson = [
    {
      type: "banner",
      containerType: "BannerSlider",
      playlistId: "JSKF03bk"
    },
    {
      type: "playlist",
      containerType: "CardSlider",
      title: "Trending",
      playlistId: "dGSUzs9o"
    },
    {
      type: "playlist",
      containerType: "CardSlider",
      title: "Favourites",
      playlistId: "xQaFzykq"
    },
  ];

  return (
    <div className="App">
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
      <DynamicBlur>
        <BlurBgImage>
          <Image src='https://cdn.jwplayer.com/v2/media/LEBW145Q/poster.jpg?width=720' width='1500' height='1500' alt='alk' />
        </BlurBgImage>
      </DynamicBlur>
      <HomeMain>
        {structureJson?.map((data, index) => {
          return data?.type === 'banner' ?
            <Banner playlistId={data?.playlistId} key={index} /> :
            <LandingPage playlistId={data?.playlistId} key={index} />
        })}
      </HomeMain>
    </div>
  )
}

export default Blender