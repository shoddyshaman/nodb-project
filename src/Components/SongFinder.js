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
            console.log(response.data)
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
            <div className="song-flex">
                {mappedSongs}
            </div>
        )
    }
}

export default SongFinder;