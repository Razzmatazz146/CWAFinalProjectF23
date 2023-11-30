import React from 'react';

function SearchResults({ playSong }) {
    const previewUrl = "https://p.scdn.co/mp3-preview/1aa59cfc4e15a45403fd35eb72ce62acd8a45f58?cid=268afd9ec3854be8833458e463e1682c";

    const songDetails = {
        song: 'SLOW DANCING IN THE DARK',
        album: 'BALLADS 1',
        artist: 'Joji'
    };

    const duration = 209273;
    const seconds = Math.floor((duration / 1000) % 60);
    const minutes = Math.floor((duration / 1000) / 60);
    const formattedTime = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

    return (
        <div className='row border rounded align-items-center text-muted p-1 my-2 mx-4'>
            <div className='col-4 text-dark fw-bold'>{songDetails.song}</div>
            <div className="col">
                <div>{songDetails.artist}</div>
                <div>{songDetails.album}</div>
            </div>
            <div className="col">{formattedTime}</div>
            <div className="col btn btn-warning p-1 m-1" onClick={() => playSong(previewUrl, songDetails)}>Preview</div>
            <div className="col btn btn-success p-1 m-1">Spotify</div>
        </div>
    );
}

export default SearchResults;
