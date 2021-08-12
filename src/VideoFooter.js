import React from 'react'
import './VideoFooter.css'
import MusicNoteicon from '@material-ui/icons/MusicNote'
import Ticker from 'react-ticker'
import disk from './img/disk.png'

const VideoFooter = ({channel, description, song}) => {
    return (
        <div className="videoFooter">
            <div className="videoFooter_text">
                <h3>@{channel}</h3>
                <p>{ description }</p>
                <div className="videoFooter_ticker">
                    <MusicNoteicon className="videoFooter_icon" />
                    <Ticker mode="smooth">
                        {({ index }) => (
                            <>
                                <p>{ song }</p>
                            </>
                        )}
                    </Ticker>
                </div>
            </div>
            <img src={disk} alt="" className="videoFooter_record" />
        </div>
    )
}

export default VideoFooter
