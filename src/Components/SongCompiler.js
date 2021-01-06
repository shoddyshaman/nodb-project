import React, {Component} from 'react';

class SongCompiler extends Component {
    handleAdd = () => {
        const {song} = this.props;
        let newSong = {
            name: song.name,
            image: song.img,
            eId: this.handleEid(song.eId)
        }
        
        this.props.addFn(newSong);
        this.props.refreshFn();
    }

    handleEid = (eId) => {
        if(eId.includes('/yt/')){
            return "https://youtube.com/watch?v=" + eId.slice(4)
        }
        if(eId.includes('/sc/')){
            return "https://soundcloud.com/" + eId.slice(4)
        }
        if(eId.includes('/vi/')){
            return "https://vimeo.com/" + eId.slice(4)
        }
       
    }
    
    render() {
        // console.log(this.props.song.image)
        return (
            <div onClick={this.handleAdd}>
                <img src={this.props.song.img} alt={this.props.song.name}/>
                <p className="song-title">{this.props.song.name}</p>
            </div>
        )
    }
}

export default SongCompiler;