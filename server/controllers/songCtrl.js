const axios = require('axios');
const { response } = require('express');

module.exports = {
    getSongs: (req, res) => {
        const songsArray = [];

        const rand1 = Math.floor(Math.random() * 60);
        const rand2 = Math.floor(Math.random() * 60);
        const rand3 = Math.floor(Math.random() * 60);
        const rand4 = rand3 + 1;
        
        axios.get(`https://openwhyd.org/adrien/playlist/${rand1}?format=json&limit=1`)
        .then(response => {
            songsArray.push(response.data[0]);
            // console.log(response.data[0])
            axios.get(`https://openwhyd.org/adrien/playlist/${rand2}?format=json&limit=1`)
            .then(response =>{
                songsArray.push(response.data[0]);
                axios.get(`https://openwhyd.org/adrien/playlist/${rand3}?format=json&limit=1`)
                .then(response =>{
                    songsArray.push(response.data[0]);
                    axios.get(`https://openwhyd.org/adrien/playlist/${rand4}?format=json&limit=1`)
                    songsArray.push(response.data[1]);
                    res.status(200).send(songsArray)
                })
            })
        })
        .catch(err => res.status(500).send(err));
    }
}