import { useRouter } from "next/router";
import { useState } from "react";
import { useEffect } from "react";
import ReactJwPlayer from "react-jw-player";

const JwplayerVideo = () => {
    const router = useRouter()
    const [mediaId, setMediaId] = useState(router.query.mediaid)

    useEffect(() => {
        setMediaId(router.query.mediaid)
    }, [router])

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

export default JwplayerVideo;