import React, { useState } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import SearchResults from '../Components/SearchResults'

function SpotifyLibrary() {
  const [preview, setPreview] = useState('');
  const [currentSong, setCurrentSong] = useState({
    song: '',
    album: '',
    artist: ''
  });

  const playSong = (url, songDetails) => {
    setPreview(url);
    setCurrentSong(songDetails);
  }

  return (
    <div style={{maxHeight:'80vh', marginBottom:'8vh', maxWidth:'90vw'}}>
      <a className="btn btn-secondary btn-border-radius-0 position-fixed top-0 start-0" href="/home">Back</a>
      <div className="container pt-2">
        <h1>Search Spotify</h1>
        <br />
        <div class="input-group input-group-lg mb-3">
          <input
            type="text"
            class="form-control"
            placeholder="Album or Song Name"
            aria-label="Search spotify"
            aria-describedby="button-addon2"
          />
          <button class="btn btn-outline-secondary bg-success bg-gradient text-white" type="button" id="button-addon2" data-mdb-ripple-init data-mdb-ripple-color="dark">
            Search
          </button>
        </div>
        <h3>Search Results</h3>
        <SearchResults playSong={playSong} />
        <div className="container border rounded fixed-bottom">
          <h4>Playing: <span className='fw-bold'>{currentSong.song}</span> by {currentSong.artist}</h4>
          <AudioPlayer autoPlay={false} src={preview} />
        </div>

      </div>
    </div>
  )
}

export default SpotifyLibrary
