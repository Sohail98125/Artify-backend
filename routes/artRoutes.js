const express = require('express')
const {searchArtwork ,getSavedArtwork}= require("../controller/Controller")
const router = express.Router();

router.get("/search",searchArtwork)
router.get("/saved",getSavedArtwork)

module.exports = router;

