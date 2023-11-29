import React from 'react'

function Home() {
  return (
    <div className="container">
        <h2>THE BOYS</h2>
        <a className="btn btn-primary mx-3" href='/local'>Local Library</a>
        <a className="btn btn-success" href='/spotify'>Spotify Library</a>
    </div>
  )
}

export default Home