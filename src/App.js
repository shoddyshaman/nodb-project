import React, {Component} from 'react';
import axios from 'axios';
import Header from './Components/Header';
import SongFinder from './Components/SongFinder';
import Playlist from './Components/Playlist';   
import './App.css';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      addedSong: []
    }
  }

  componentDidMount(){
    axios.get('/api/added-song')
    .then(res => {
      this.setState({addedSong: res.data});
      // console.log(this.state.addedSong)
    })
    .catch(err => console.error(err));
  }

  addSong = (song) => {
    axios.post('/api/added-song',{song: song})
    .then(res => {
      this.setState({addedSong: res.data});
      // console.log(this.state.addedSong)
    })
    .catch(err => console.error(err));
  }

  editSong = (id, newName) => {
    let body = {name: newName};

    axios.put(`/api/added-song/${id}`, body)
    .then(res =>{
      this.setState({addedSong: res.data})
    })
    .catch(err => console.error(err));
  }

  removeSong = (id) => {
    axios.delete(`/api/added-song/${id}`)
    .then(res =>{
      this.setState({addedSong: res.data})
    })
    .catch(err => console.error(err));
  }

  render(){ 
    return(
      <div className="App">
        <Header />
        <SongFinder 
          addFn={this.addSong}/>
        <Playlist 
        addedSong={this.state.addedSong}
        eNameFn={this.editSong}
        removeFn={this.removeSong}/>
      </div>
    )
  }
}



export default App;
