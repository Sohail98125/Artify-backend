const axios = require("axios")
const Artwork = require("../model/artwork")
const dotenv = require("dotenv");
const apikey = process.env.API_KEY

const searchArtwork = async (req, res) => {
    try {
        const { query } = req.query;
        const URl = `https://api.artsearch.io/artworks?query=${encodeURIComponent(query)}`;
        const response = await axios.get(URl, {
            headers: {
                "x-api-key": apikey,
                "Content-Type": "application/json"
            }
        })
        const artworks = response.data.artworks

        const exisitingQuery = await Artwork.findOne({ query })
        if (!exisitingQuery) {
            await Artwork.create({
                query,
                id: artworks[0].id,
            })
        }

        const savedArtwork = artworks.map((art) => ({
            id: art.id,
            query,
        }))
        // await Artwork.insertMany(savedArtwork)
        res.json(response.data)
    } catch (error) {
        console.error(error)
    }
}

const getSavedArtwork = async (req, res) => {
    try {
        const history = await Artwork.find()
        res.json({ history })
    } catch (error) {
        console.error(error)
    }
}

module.exports = { searchArtwork, getSavedArtwork };