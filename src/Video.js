import React, { useRef } from 'react'
import './Video.css'

const Video = () => {
    const videoRef = useRef(null)
    const onVideoClick = () => {
        // 
    }


    return (
        <div className="video">
            <video className="video_player"
                loop
                ref={videoRef}
                onClick={onVideoClick}
                src="https://v16m.tiktokcdn.com/a1b7ca868d8170a221156aeb5df28681/6114e6a5/video/tos/useast2a/tos-useast2a-ve-0068c004/27a3f7737a6b4dd2b413de4727e65eba/?a=1233&br=3722&bt=1861&cd=0%7C0%7C1&ch=0&cr=0&cs=0&cv=1&dr=0&ds=3&er=&ft=Qq8CmEST_4ka&l=2021081203150101018907401519281AE4&lr=tiktok_m&mime_type=video_mp4&net=0&pl=0&qs=0&rc=M3J0bGk6Zjx4NzMzNzczM0ApOjgzNTk3Zzs3Nzs4Zmc4NmctcWBvcjRvZC1gLS1kMTZzczY0LTQuXjNgMzVhNi0xMzA6Yw%3D%3D&vl=&vr="></video>
            
        </div>
    )
}

export default Video
