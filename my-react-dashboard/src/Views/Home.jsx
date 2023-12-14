import React from 'react'

function Home() {
  return (
    <div className="container">
      <div className="container" style={{ paddingTop: '200px' }}>
        <h1>THE BOYS</h1>
        <h3>Choose the library you would like to access:</h3>
        <br />
        <div className="row">
          <div className="col">
            <a className="btn btn-primary mx-3" href='/local'>Local Library</a>
            <h6>Browse a curated selection</h6>
          </div>
          <div className="col">
            <a className="btn btn-success mx-3" href='/spotify'>Spotify Library</a>
            <h6>Search for songs using the Spotify API</h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home