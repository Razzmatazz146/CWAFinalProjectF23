import React, { useState } from 'react'
import LocalTrack from '../Components/LocalTrack'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import { localTracks } from '../data/localTracks'

function LocalLibrary() {
  const [source, setSource] = useState('');
  const [currentSong, setCurrentSong] = useState({
    name: '',
    artist: ''
  });

  const playSong = (url, songDetails) => {
    setSource(url);
    setCurrentSong(songDetails);

    console.log(url, ", ", songDetails)
  }

  return (
    <div className='text-center'>
      <h1>Local Music</h1>
      <div className='px-2 container-fluid' style={{ "paddingBottom": "175px" }}>
        <div className="row">
          {localTracks.map(track => {
            return (
              <div className="col-6" key={track.id}>
                <LocalTrack name={track.name} artist={track.artist} duration={track.duration} source={track.source} listens={2} playSong={playSong} />
              </div>
            )
          })}
        </div>
        <a className="btn btn-secondary" href='/'>Back</a>
      </div>
      <div className="container border rounded fixed-bottom bg-white">
        <h4>Playing: <span className='fw-bold'>{currentSong.name}</span> by {currentSong.artist}</h4>
        <AudioPlayer src={source} preload='none' autoPlay={false}/>
      </div>
    </div>
  )
}

export default LocalLibrary
