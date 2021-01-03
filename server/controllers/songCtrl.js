const axios = require('axios');
const { response } = require('express');

module.exports = {
    getSongs: (req, res) => {
        const songsArray = [];

        const rand1 = Math.floor(Math.random() * 60)
        const rand2 = rand1 + 1;
        const rand3 = rand2 + 1;
        
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
                    res.status(200).send(songsArray)
                })
            })
        })
        .catch(err => res.status(500).send(err));
    }
}