import React from 'react'
import LocalTrack from '../Components/LocalTrack'
import { localTracks } from '../data/localTracks'

function LocalLibrary() {
  return (
    <div>
      <h1>Local Music</h1>
      {localTracks.map(track => {
        return (
          <LocalTrack name={track.name} artist={track.artist} duration={track.duration} source={track.source} listens={2}/>
        )
      })}
      <button className="btn btn-secondary">Back</button>
    </div>
  )
}

export default LocalLibrary
