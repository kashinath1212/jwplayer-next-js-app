import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react'
import Slider from 'react-slick';
import { BannerTitle, DisplayDuration, LineClamp, PosterSection, TitleDiv } from '../api/StyledComponents';

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
                {data?.map((item, index) =>
                    < div className='' key={index} onClick={() => router.push({ pathname: '/component/bannerChannel', query: { mediaid: `${item.mediaid}` } })}>
                        <div className='m-2 card_div_img_landing'>
                            <div className='card_div_img '>
                                <PosterSection>
                                    <div>
                                        {item?.duration ? <DisplayDuration>{Math.round(item?.duration / 60)}min</DisplayDuration> : <DisplayDuration >Series</DisplayDuration>}
                                        <div className='description_box landing_box'>
                                            <span className="d-inline-block" tabIndex="0" data-toggle="tooltip" title={item?.description}>
                                                <LineClamp>
                                                    {item?.description}
                                                </LineClamp>
                                            </span>
                                        </div>
                                    </div>
                                    <Image src={item?.image} width='720' height='420' alt="akdjfa" className='img-fluid rounded landing_image' />
                                </PosterSection>
                            </div>
                            <BannerTitle>
                                <TitleDiv>{item.title}</TitleDiv>
                            </BannerTitle>
                        </div>
                    </div>
                )
                }
            </Slider >

        </div >
    )
}

export default LandingPage