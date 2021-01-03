const express = require('express'),
      songCtrl = require('./controllers/songCtrl'),
      playlistCtrl = require('./controllers/playlistCtrl'),
      app = express(),
      port = 4444;


app.use(express.json());

app.get('/api/fresh-songs', songCtrl.getSongs);

app.get('/api/added-song', playlistCtrl.getAddedSong);
app.post('/api/added-song', playlistCtrl.addSong);
app.put('/api/added-song/:id', playlistCtrl.editSong)
app.delete('/api/added-song/:id', playlistCtrl.removeSong);

app.listen(port, () => console.log(`Server running on ${port}`));