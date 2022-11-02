import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import ReactJwPlayer from "react-jw-player";

const JwplayerVideo = (props) => {
    // const router = useRouter()
    const [mediaId, setMediaId] = useState(props.mediaid)

    // useEffect(() => {
    //     setMediaId(router.query.mediaid)
    // }, [router])

    return mediaId && (
        <div className="App">
            <div
                className="jw-video-container"
                data-mediaid="LEBW145Q"
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
    return {
        props: { mediaid: context?.query?.mediaid } // will be passed to the page component as props
    }
}



export default JwplayerVideo;