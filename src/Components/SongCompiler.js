import React, {Component} from 'react';

class SongCompiler extends Component {
    handleAdd = () => {
        const {song} = this.props;
        let newSong = {
            name: song.name,
            image: song.img
        }
        
        this.props.addFn(newSong);
        this.props.refreshFn();
    }
    
    render() {
        // console.log(this.props.song.image)
        return (
            <div onClick={this.handleAdd}>
                <img src={this.props.song.img} alt={this.props.song.name}/>
                <p>{this.props.song.name}</p>
            </div>
        )
    }
}

export default SongCompiler;