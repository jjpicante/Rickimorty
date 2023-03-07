const axios = require('axios');

const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = (req, res) => {
    const { id } = req.params
    axios(URL + id)
        .then(response => {
            const character = {
                id: response.data.id,
                name: response.data.name,
                species: response.data.species,
                image: response.data.image,
                gender: response.data.gender,
            }
            return res.status(200).json(character);
        },
            (error) => {
                return res.status(500).send(error.message);
            }
        )
}



module.exports = { getCharById };



























/* const getCharById = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
    .then(result => result.data)
    .then(data => {
        let character = {
            name: data.name,
            image: data.image,
            gender: data.gender,
            species: data.species
        }
        res
        .writeHead(200, { "Content-type": "application/json"})
        .end(JSON.stringify(character))
    })
    .catch(err =>
        res
        .writeHead(500, { "Content.type": "text/plain"})
        .end(`El personaje con id:${id} no fue encontrado`)
    )
} */


