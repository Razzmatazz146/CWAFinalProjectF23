import React from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

function MusicPlayer(props) {
    return (
        <div className="container border rounded fixed-bottom">
            <h4>Playing: <span className='fw-bold'>{props.song}</span> by {props.artist}</h4>
            <AudioPlayer autoPlay={true} src={props.url} volume={0.5} />
        </div>
    )
}

export default MusicPlayer
