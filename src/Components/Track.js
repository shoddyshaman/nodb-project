import React, {Component} from 'react';
import ReactPlayer from 'react-player';

class Track extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isEditing: false,
            nameInput: ''
        }
    }

    handleInput = (value) => {
        this.setState({nameInput: value});
    }

    handleToggle = () => {
        this.setState({isEditing: !this.state.isEditing});
    }

    handleEdit = (id) => {
        this.props.eNameFn(id, this.state.nameInput);
        this.handleToggle();
    }

    render() {
        // console.log(this.props.song)
        return (
            <div className="song-shelf">
                <div className="song-info">
                
                {this.state.isEditing
                ? (
                    <div>
                        <img src={this.props.song.image} alt={this.props.song.name}/>
                        <input 
                            value={this.state.nameInput}
                            onChange={e => this.handleInput(e.target.value)}/>
                        <button onClick={()=> this.handleEdit(this.props.song.id)}>Submit</button>  
                        <button onClick={()=> this.props.removeFn(this.props.song.id)}>Remove from Playlist</button>
                    </div>
                )
                : (
                    <div>
                        <img src={this.props.song.image} alt={this.props.song.name}/>
                        <p className="song-title">{this.props.song.name}</p>
                        <button onClick={this.handleToggle}>Edit Song name</button>
                        <button onClick={()=> this.props.removeFn(this.props.song.id)}>Remove from Playlist</button>
                    </div>
            )}
                </div>
                <div className="react-player">
                    <ReactPlayer url={this.props.song.eId}/>
                </div>
            </div>
            
        )
    }
}

export default Track;