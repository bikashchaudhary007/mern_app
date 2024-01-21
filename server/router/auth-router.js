
const express = require("express");
const router = express.Router();
const authcontrollers = require("../controllers/auth-controller");


//For Home 
router.route("/").get(authcontrollers.home);

//For Registration
// router.route("/register").get(authcontrollers.register);
router.route("/register").post(authcontrollers.register);

module.exports = router;



