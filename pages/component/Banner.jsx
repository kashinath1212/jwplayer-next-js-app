import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import Slider from 'react-slick';
import { BannerContainer, BannerTitle, DisplayDuration, DisplayLive, LineClamp, PosterSection, TitleDiv } from '../api/StyledComponents';

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
        autoplaySpeed: 3500,
        pauseOnHover: false,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
    }

    return (
        <BannerContainer>
            <Slider {...settings}>
                {data?.map((item, index) =>
                    <div key={index} onClick={() => router.push({ pathname: '/component/bannerChannel', query: { mediaid: `${item.mediaid}` } })}>
                        <div className='m-2 card_div_img_banner'>
                            <div className='card_div_img'>
                                <PosterSection>
                                    <div>
                                        {item?.duration ? <DisplayDuration>{Math.round(item?.duration / 60)}min</DisplayDuration> : <DisplayLive>live</DisplayLive>}
                                        <div className='description_box'>
                                            <span className="d-inline-block" tabIndex="0" data-toggle="tooltip" title={item?.description}>
                                                <LineClamp>
                                                    {item?.description}
                                                </LineClamp>
                                            </span>
                                        </div>
                                    </div>
                                    <Image src={item?.image} alt={"lsdkfjs"} width={'720'} height={'420'} className='img-fluid w-100 rounded banner_image' />
                                </PosterSection>
                            </div>
                            <BannerTitle>
                                <TitleDiv>{item.title}</TitleDiv>
                            </BannerTitle>
                        </div>
                    </div>
                )}
            </Slider>
        </BannerContainer>
    )
}

export default Banner