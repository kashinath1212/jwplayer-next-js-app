import Image from 'next/image';
import { BlurBgImage, DynamicBlur, HomeMain } from './api/StyledComponents';
import Banner from './component/Banner';
import LandingPage from './component/LandingPage';
import Header from './Header';

function Blender(props) {
  console.log(props);
  
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
      <DynamicBlur>
        <BlurBgImage>
          <Image src='https://cdn.jwplayer.com/v2/media/LEBW145Q/poster.jpg?width=720' width='1500' height='1500'  alt='alk' />
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