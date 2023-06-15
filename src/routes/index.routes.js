const express = require("express");
const router = express.Router();

// Controllers
const { renderIndex, renderAbout, renderHome,renderforma,renderpdff } = require("../controllers/index.controller");

router.get("/", renderIndex);
router.get("/about", renderAbout);
router.get("/home", renderHome);
router.get("/forma", renderforma);
router.get("/pdff", renderpdff);

module.exports = router;
