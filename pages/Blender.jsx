import Banner from './component/Banner';
import LandingPage from './component/LandingPage';


function Blender() {
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
    <div>
      <div className="App">
        <div className='_dynamicBlur_1a0xz_1 '>
          <div>
            <img src='https://cdn.jwplayer.com/v2/media/LEBW145Q/poster.jpg?width=720' className='bg_image_blender' alt='alk' />
          </div>
        </div>
        <div className='w-100' style={{ overflow: "hidden" }}>
          element={structureJson?.map((data, index) => {
            return data.type === 'banner' ?
              <Banner playlistId={data.playlistId} key={index} /> :
              <LandingPage playlistId={data.playlistId} key={index} />
          })}

        </div>
      </div>
    </div>
  )
}

export default Blender