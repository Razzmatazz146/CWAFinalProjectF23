import React, { useState } from 'react'
import SearchResults from '../Components/SearchResults'
import { performSearch } from '../data/spotify';
import MusicPlayer from '../Components/MusicPlayer';

function SpotifyLibrary() {
  const [preview, setPreview] = useState('');
  const [keyword, setKeyword] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const [currentSong, setCurrentSong] = useState({
    album: '',
    artist: '',
    song: '',
    duration: '',
    url: ''
  });

  const playSong = (url, songDetails) => {
    setPreview(url);
    setCurrentSong(songDetails);
  }

  const onNewSearch = (event) => {
    setKeyword(event.target.value);
  };

  const handleSearch = async () => {
    const results = await performSearch(keyword);
    setSearchResults(results);
  };

  return (
    <div style={{ maxHeight: '80vh', marginBottom: '8vh', maxWidth: '90vw' }}>
      <a className="btn btn-secondary btn-border-radius-0 position-fixed top-0 start-0" href="/home">Back</a>
      <div className="container pt-2">
        <h1>Search Spotify</h1>
        <br />
        <div className="input-group input-group-lg mb-3">
          <input type="text" value={keyword} className="form-control" placeholder="Album or Song Name" onChange={onNewSearch} />
          <button className="btn btn-outline-secondary bg-success bg-gradient text-white" type="button"
            id="button-addon2" data-mdb-ripple-init data-mdb-ripple-color="dark" onClick={handleSearch}>
            Search
          </button>
        </div>
        <h3>Search Results</h3>
        {searchResults.map(track => {
          return (
            <div key={track.id}>
              <SearchResults song={track.song} artist={track.artist} album={track.album} duration={track.duration} playSong={playSong} previewUrl={track.previewUrl} key={track.id} />

            </div>
          )
        })}
        <MusicPlayer currentSong={currentSong.song} url={currentSong.url} artist={currentSong.artist} />
      </div>
    </div>
  )
}

export default SpotifyLibrary
