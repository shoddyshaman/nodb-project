const addedSong = [];
let id = 1;

module.exports = {
    getAddedSong: (req, res) =>{
        res.status(200).send(addedSong);
    },
    addSong:(req, res) =>{
        const {song} = req.body;

        song.id = id;
        id++;
        addedSong.push(song);
        res.status(200).send(addedSong)
    },
    editSong:(req, res) =>{
        const {id} = req.params,
              {name} = req.body;

        const song = addedSong.find(element => element.id === +id);
        // console.log(song)
        song.name = name;
        res.status(200).send(addedSong)
    },
    removeSong:(req, res) =>{
        const {id} = req.params;

        const index = addedSong.findIndex(element => element.id === +id);
        addedSong.splice(index, 1);
        res.status(200).send(addedSong)
    }
}