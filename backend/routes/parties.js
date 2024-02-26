const router = require("express").Router();

const partyController = require("../controllers/partyController.js");

router.route("/parties").post((req,res)=> partyController.create(req,res));

module.exports = router;