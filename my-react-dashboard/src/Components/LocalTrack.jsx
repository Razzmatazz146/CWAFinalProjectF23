import React from 'react'

function LocalTrack(props) {    
    return (
        <div className='row card my-3 bg-light border border-info'>
            <div className="container">
                <div className="row">
                    <div className="col fw-bold">{props.name}</div>
                    <div className="col">{props.artist}</div>
                    <div className="col text-secondary">{props.duration}</div>
                    <div className="col btn btn-info text-white" onClick={playTrack}>Play ▶️</div>
                    <div className="col">Played {props.listens} times.</div>
                </div>
            </div>
        </div>
    )
}

export default LocalTrack