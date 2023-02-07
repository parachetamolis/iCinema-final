const express = require("express");
const router = express.Router();
const { getAllMovies } = require("../controller/movie");

router.get("/", getAllMovies);

module.exports = router;

