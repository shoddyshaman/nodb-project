import React, {Component} from 'react';

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
        return (
            <div>
                <img src={this.props.song.image} alt={this.props.song.name}/>
                {this.state.isEditing
                ? (
                    <div>
                      <input 
                            value={this.state.nameInput}
                            onChange={e => this.handleInput(e.target.value)}/>
                        <button onClick={()=> this.handleEdit(this.props.song.id)}>Submit</button>  
                    </div>
                )
                : (
                    <div>
                        <p>{this.props.song.name}</p>
                        <button onClick={this.handleToggle}>Edit Song</button>
                    </div>
            )}
            <button onClick={()=> this.props.removeFn(this.props.song.id)}>Remove from Playlist</button>
            </div>
        )
    }
}

export default Track;