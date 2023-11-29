import React from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'

function SpotifyLibrary() {
  return (
    <div>
      <h1>Spotify</h1>
      <br />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="card">
              <h5>SLOW DANCING IN THE DARK</h5>
              <h5>Joji</h5>
              <AudioPlayer 
              autoPlay={false}
              src="https://p.scdn.co/mp3-preview/1aa59cfc4e15a45403fd35eb72ce62acd8a45f58?cid=268afd9ec3854be8833458e463e1682c"/>
            </div>
          </div>
          <div className="col">
            <div className="card">
            <h5>Demons</h5>
              <h5>Joji</h5>
              <AudioPlayer 
              autoPlay={false}
              src="https://p.scdn.co/mp3-preview/8dc978c39f1f2856a9173060754b73f5bc068bc0?cid=268afd9ec3854be8833458e463e1682c"/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              <h5>Glimpse of Us</h5>
              <h5>Joji</h5>
            <AudioPlayer 
              autoPlay={false}
              src="https://p.scdn.co/mp3-preview/12e4a7ef3f1051424e6e282dfba83fe8448e122f?cid=268afd9ec3854be8833458e463e1682c"/>
            </div>
          </div>
          <div className="col">
            <div className="card">
            <h5>Sanctuary</h5>
              <h5>Joji</h5>
            <AudioPlayer 
              autoPlay={false}
              src="https://p.scdn.co/mp3-preview/b3c2037a7cd4745177be546b5e91a3d1e663ce9f?cid=268afd9ec3854be8833458e463e1682c"/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
            <h5>YEAH RIGHT</h5>
              <h5>Joji</h5>
            <AudioPlayer 
              autoPlay={false}
              src="https://p.scdn.co/mp3-preview/a5583f1e308e542367e722ed879b93bdb4e25f8f?cid=268afd9ec3854be8833458e463e1682c"/>
            </div>
          </div>
          <div className="col">
            <div className="card">
            <h5>Like You Do</h5>
              <h5>Joji</h5>
            <AudioPlayer 
              autoPlay={false}
              src="https://p.scdn.co/mp3-preview/b6264d2126b08a8219df6502c8b613ee9ebe5577?cid=268afd9ec3854be8833458e463e1682c"/>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SpotifyLibrary
