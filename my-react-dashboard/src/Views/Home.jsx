import React from 'react'

function Home() {
  return (
    <div className="container">
      <div className="container" style={{ paddingTop: '200px' }}>
        <h1>THE BOYS</h1>
        <a className="btn btn-primary mx-3" href='/local'>Local Library</a>
        <a className="btn btn-success mx-3" href='/spotify'>Spotify Library</a>
      </div>
    </div>
  )
}

export default Home