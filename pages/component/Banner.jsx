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
            style={{ ...style, display: "block", right: "15px", zIndex: "1" }}
            onClick={onClick}
        />
    );
}

function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
        <div
            className={className}
            style={{ ...style, display: "block", left: "15px", zIndex: "1" }}
            onClick={onClick}
        />
    );
}

function Banner(props) {
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
        dots: true,
        infinite: true,
        slidesToShow: 1.66,
        slidesToScroll: 1,
        autoplay: true,
        speed: 1800,
        autoplaySpeed: 3000,
        pauseOnHover: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }

    return (
        <div className='pb-5 pt-1'>
            <Slider {...settings} className="">
                {data?.map((item, index) => {
                    const words = new Array(item?.description)
                    const newWords = words[0].split(' ')
                    return (
                        <div className='' key={index} onClick={() => router.push({ pathname: '/component/bannerChannel', query: { mediaid: `${item.mediaid}` } })}>
                            <div className='m-2'>
                                <div className='_poster_1wg2e_15 card_div_img'>
                                    <div className='duration_box'>
                                        {item?.duration ? <span className='duration_display_time'>{Math.round(item?.duration / 60)}min</span> : <span className='duration_display_live'>live</span>}
                                        <div className='description_box'>
                                            <span className="d-inline-block" tabIndex="0" data-toggle="tooltip" title={item?.description}>
                                                {newWords.map((des, i) => i < 25 && (des = des + ' ') || i === 26 && (`.......`))}
                                            </span>
                                        </div>
                                    </div>
                                    <Image src={item?.image} alt={"lsdkfjs"} width={'720'} height={'420'} className='img-fluid w-100 rounded' />
                                </div>
                                <div className='_titleContainer_1wg2e_142'>
                                    <div className='_title_1wg2e_19'>{item.title}</div>
                                </div>
                            </div>
                        </div>
                    )
                })}
            </Slider>
        </div>
    )
}

export default Banner