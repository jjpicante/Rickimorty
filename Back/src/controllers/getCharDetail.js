const axios = require('axios');
const URL = "https://rickandmortyapi.com/api/character/"


const getCharDetail = (req, res) => {
    const { detailId } = req.params
    axios(URL + detailId)
        .then(response => {
            const character = {
                id: response.data.id,
                name: response.data.name,
                species: response.data.species,
                image: response.data.image,
                gender: response.data.gender,
                origin: response.data.origin
            }
            return res.status(200).json(character);
        },
            (error) => {
                return res.status(500).send(error.message);
            }
        )
}
module.exports = { getCharDetail }





















/* const getCharDetail = (res, id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`)
        .then(result => result.data)
        .then(data => {
            let character = {
                name: data.name,
                image: data.image,
                gender: data.gender,
                species: data.species,
                status: data.status,
                origin: data.origin.name
            }

            res
                .writeHead(200, { "Content-type": "application/json" })
                .end(JSON.stringify(character))
        })
        .catch(err =>
            res
                .writeHead(500, { "Content.type": "text/plain" })
                .end(`El personaje con id:${id} no fue encontrado`)
        )
}
 */