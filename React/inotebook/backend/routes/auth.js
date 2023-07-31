const express = require("express");
const User = require("../models/User");
const router = express.Router();
const { body, validationResult } = require('express-validator'); //. For schema validation ex -> pass must be of 5 char
const bcrypt = require("bcryptjs"); //.     For encrypting password with hashing , salt and pepper 
const jwt = require("jsonwebtoken") //.   For authentication of user using tokens


//  Create a user using : POST "/api/auth/createuser" . Doesn't require Auth -> No Login Required
router.post("/createuser", [
  // Possible using express-validator for validation
  body("name", "Enter a valid name").isLength({ min: 3 }),
  body("password", "Password should be min 5 digits").isLength({ min: 5 }),
  body("email", "Enter a valid email").isEmail()],

  async (req, res) => {
    // If there are errors then return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.ststus(400).json({ errors: errors.array() })
      // return;
    }

    try {
      // Check whether the email already exists 
      let user = await User.findOne({ email: req.body.email })
      if (user) { return res.status(400).json({ error: "User with same email exists" }) }


      //. Secureing the password
      const salt = await bcrypt.genSalt(10)
      const secPass = await bcrypt.hash(req.body.password, salt)

      // Creating the User
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      })

      // Returning the response of above action here i am showing the user which is input by the developer
      res.json(user)
    }
    //.   If error occured then we console the error message 
    catch (error) {
      console.error(error.message)
      res.status(500).send("Some error occured")
    }

  })

module.exports = router;