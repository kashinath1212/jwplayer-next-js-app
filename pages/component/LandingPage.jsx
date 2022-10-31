import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import Slider from 'react-slick';

function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", right: "15px", top: "80px", zIndex: "1" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: "15px", top: "80px", zIndex: "1" }}
            onClick={onClick}
        />
    );
}

function LandingPage(props) {
    const [data, setData] = useState()
    const router = useRouter()
    const getApi = async () => {
        try {
            const res = await axios.get(`https://cdn.jwplayer.com/v2/playlists/${props.playlistId}`);
            setData(res.data.playlist);
        } catch (error) {
            console.error(error);
        }
    }
    console.log(data);

    useEffect(() => {
        getApi()
    }, [])

    const settings = {
        dots: false,
        infinite: false,
        slidesToShow: 5.3,
        slidesToScroll: 1,
        autoplay: false,
        speed: 500,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }

    return (
        <div>
            <Slider {...settings} className="">
                {data?.map((item, index) => {
                    const words = new Array(item?.description)
                    const newWords = words[0].split(' ')
                    return (
                        < div className='kashi' key={index} onClick={() => router.push({ pathname: '/component/bannerChannel', query: { mediaid: `${item.mediaid}` } })}>
                            <div className='m-2 '>
                                <div className='card_div_img'>
                                    <div className='_poster_1wg2e_15'>
                                        <div className='duration_box'>
                                            {item?.duration ? <span className='duration_display_time'>{Math.round(item?.duration / 60)}min</span> : <span className='duration_display_time'>Series</span>}
                                            <div className='description_box landing_box'>
                                                <span className="d-inline-block" tabIndex="0" data-toggle="tooltip" title={item?.description}>
                                                    {newWords.map((des, i) => i < 13 && (des = des + ' ') || i === 26 && (`.......`))}
                                                </span>
                                            </div>
                                        </div>
                                        <Image src={item?.image} width='720' height='420' alt="akdjfa" className='img-fluid rounded' />
                                    </div>
                                </div>
                                <div className='_titleContainer_1wg2e_142'>
                                    <div className='_title_1wg2e_19'>{item.title}</div>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </Slider >

        </div >
    )
}

export default LandingPage