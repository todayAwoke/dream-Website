import React from 'react'
import demo from '../../assets/demo.mp4'
const VideoPlayer = ({ playState, SetPlayState }) => {
    return (
        <div className={`video-player  ${playState ? '' : 'hide'}`}>
            <video src={demo} autoPlay muted controls></video>
        </div >
    )
}

export default VideoPlayer
