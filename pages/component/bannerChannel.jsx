import axios from 'axios';
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { BannerBlurBg, Button, ChannelContainer, DynamicBlur, Span } from '../api/StyledComponents';

function BannerChannel(props) {
    const router = useRouter()
    const [data, setData] = useState(props?.mediaid)
    console.log(data?.playlist[0]?.image);
    // const getApi = async () => {
    //     try {
    //         const res = await axios.get(`https://cdn.jwplayer.com/v2/media/${router?.query?.mediaid}`)
    //         setData(res.data)
    //     } catch (err) {
    //         console.error(err);
    //     }
    // }
    // useEffect(() => {
    //     getApi()
    // }, [router.query.mediaid])


    return (
        <div>
            <Head>
                <title>Cool Title</title>
                <meta name="description" content="Checkout our cool page" key="desc" />
                <meta property="og:title" content="Social Title for Cool Page" />
                <meta
                    property="og:description"
                    content="And a social description for our cool page"
                />
                <meta
                    property="og:image"
                    content="https://example.com/images/cool-page.jpg"
                />
            </Head>
            <ChannelContainer>
                <div className='text-start w-75' style={{ zIndex: "1" }}>
                    <div className='text-start w-75 mb-5'>
                        <h1 className='mb-1'>{data?.title}</h1>
                        <div className='mb-2'>
                            <Span >2019</Span>
                            <Span>8m</Span>
                            <Span>Fantasy</Span>
                            <Span>CC-BY</Span>
                        </div>
                        <div>
                            {data?.description}
                        </div>
                    </div>
                    <div className='py-5'>
                        <Button primary onClick={() => router.push({ pathname: '/component/JwplayerVideo', query: { mediaid: `${router?.query?.mediaid}` } })}>Start Watching</Button>
                        <Button >Favorite</Button>
                        <Button >Share</Button>
                    </div>
                </div>
            </ChannelContainer>
            {data?.playlist[0]?.image &&
                <DynamicBlur>
                    <BannerBlurBg>
                        <Image src={data?.playlist[0]?.image} alt={data?.playlist[0]?.image} width='1500' height='1500' />
                    </BannerBlurBg>
                </DynamicBlur>
            }
        </div>
    )
}

export async function getServerSideProps(context) {
    const res = await axios.get(`https://cdn.jwplayer.com/v2/media/${context?.query?.mediaid}`)

    return {
        props: { mediaid: res.data } // will be passed to the page component as props
    }
}



export default BannerChannel