const express = require("express");
const router = express.Router();
const { saveGameResult } = require("../controllers/gameController");
const auth = require("../middleware/auth");

router.post("/", auth, saveGameResult);

module.exports = router;
