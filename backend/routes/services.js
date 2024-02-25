const router = require("express").Router();

const serviceController = require("../controllers/serviceController.js");

router
    .route("/services")
    .post((req,res)=> serviceController.create(req,res));


router.route("/services").get((req,res)=> serviceController.getAll(req,res));
//Funções

module.exports = router;