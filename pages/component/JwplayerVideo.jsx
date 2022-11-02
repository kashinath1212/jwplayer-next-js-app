import axios from "axios";
import Head from "next/head";
import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import ReactJwPlayer from "react-jw-player";

const JwplayerVideo = (props) => {
    const router = useRouter()
    const [mediaId, setMediaId] = useState(props.mediaid)
    const [data, setData] = useState(props?.data)
    console.log(data);
    // useEffect(() => {
    //     setMediaId(router.query.mediaid)
    // }, [router])

    return mediaId && (
        <div className="App">
            <Head>
                <title>{data?.title}</title>
                <meta name="description" content={data?.description} />
                <meta property="og:url" content={router?.asPath} />
                <meta property="og:type" content="website" />
                <meta property="og:title" content={data?.title} />
                <meta property="og:description" content={data?.description} />
                <meta property="og:image" content={data?.playlist[0]?.image} />
            </Head>
            <div
                className="jw-video-container"
                data-mediaid={mediaId}
                style={{ height: "100%", width: "100%" }}
            >
                <ReactJwPlayer
                    playerId={mediaId}
                    playerScript="https://content.jwplatform.com/libraries/j9BLvpMc.js"
                    playlist={`https://cdn.jwplayer.com/v2/media/${mediaId}`}
                />
            </div>
        </div>
    )
}
export async function getServerSideProps(context) {
    console.log(context);
    const res = await axios.get(`https://cdn.jwplayer.com/v2/media/${context?.query?.mediaid}`)
    return {
        props: { mediaid: context?.query?.mediaid, data: res.data } // will be passed to the page component as props
    }
}



export default JwplayerVideo;