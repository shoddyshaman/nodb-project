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
        <section className="playlist-main-container">
            <h2>My Plotify Playlist</h2>
            <div>{mappedSong}</div>
        </section>
    )
}

export default Playlist;