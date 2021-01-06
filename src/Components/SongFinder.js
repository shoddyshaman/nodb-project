import React, {Component} from 'react';
import axios from 'axios';
import SongCompiler from './SongCompiler'


class SongFinder extends Component {
    constructor(props) {
        super(props);
        this.state = {
            freshSongs: []
        }
    }

    componentDidMount(){
        this.getFreshSongs();
    }

    getFreshSongs = () => {
        axios.get('/api/fresh-songs')
        .then(response => {
            this.setState({freshSongs: response.data})
            // console.log(this.state.freshSongs[0].eId)
        })
        .catch(err => console.error(err))
    }

    render() { 

        const mappedSongs = this.state.freshSongs.map((song, i) => (
        <SongCompiler
            key={i}
            song={song}
            addFn={this.props.addFn}
            refreshFn={this.getFreshSongs}/>
        ))
        return (
            <section className="main-container-1">
            <div className="song-flex">
                {mappedSongs}
            </div>
            <button className="shuffle-button" onClick={this.getFreshSongs}>Shuffle</button>
            </section>
        )
    }
}

export default SongFinder;