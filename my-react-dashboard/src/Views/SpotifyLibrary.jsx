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
              <h5>Title</h5>
              <h5>Artist</h5>
              <AudioPlayer 
              autoPlay={false}
              src="https://p.scdn.co/mp3-preview/1aa59cfc4e15a45403fd35eb72ce62acd8a45f58?cid=268afd9ec3854be8833458e463e1682c"/>
            </div>
          </div>
          <div className="col">
            <div className="card">
            <h5>Title</h5>
              <h5>Artist</h5>
              <AudioPlayer 
              autoPlay={false}
              src="https://p.scdn.co/mp3-preview/8dc978c39f1f2856a9173060754b73f5bc068bc0?cid=268afd9ec3854be8833458e463e1682c"/>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              Song 3
            </div>
          </div>
          <div className="col">
            <div className="card">
              Song 4
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <div className="card">
              Song 5
            </div>
          </div>
          <div className="col">
            <div className="card">
              Song 6
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SpotifyLibrary
