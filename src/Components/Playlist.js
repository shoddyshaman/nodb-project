import React from 'react';
import Track from './Track';

const Playlist = props => {
    const mappedSong = props.addedSong.map((song, index) => (
        <Track 
        key={index}
        song={song}
        eNameFn={props.eNameFn}
        removeFn={props.removeFn}/>
    ))

    return (
        <div>
            <h1>My Playlist</h1>
            <div className="song-flex">{mappedSong}</div>
        </div>
    )
}

export default Playlist;