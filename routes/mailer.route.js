const express = require("express");
const router = express.Router();

const Contact = require('../controllers/mailer.controller');


// // router.get("/",UserController.sampleUser);
// router.get("/", UserController.getAll);
router.post("/portfolioDanish", Contact.danishContactUs);
router.post("/portfolioUsama", Contact.usamaContactUs);
// router.post("/register", UserController.registerUser);
// router.get("/:_id", UserController.getSingleUser);
// // router.post("/",UserController.addUser);
// router.put("/:_id", UserController.updateUser);
// router.delete("/:_id", UserController.deleteUser);


module.exports = router;