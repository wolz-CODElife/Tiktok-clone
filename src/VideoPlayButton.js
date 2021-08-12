import React from 'react'
import './VideoPlayButton.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow';

const VideoPlayButton = ({onVideoClick}) => {
    return (
        <div className="video_play_button">
            <PlayArrowIcon onClick={onVideoClick} className="video_play_icon" />
        </div>
    )
}

export default VideoPlayButton
