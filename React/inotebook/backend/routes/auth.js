const express = require("express");
const User = require("../models/User"); //.   Importing User model  
const router = express.Router();
const { body, validationResult } = require('express-validator'); //. For schema validation ex -> pass must be of 5 char
const bcrypt = require("bcryptjs"); //.     For encrypting password with hashing , salt and pepper 
const jwt = require("jsonwebtoken"); //.   For authentication of user using tokens

const JWT_SECRET = 'FarazSecretKey786';  //.  Secret key for encryption
const fetchuser = require("../middleware/fetchuser")

//  ROUTE 1 -->    Create a user using : POST "/api/auth/createuser" . Doesn't require Auth -> No Login Required
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
      if (user) { return res.status(400).json({ error: "User with same email exists" }) } //. Return bad request if exists

      //. Secureing the password -> Adding salt and encrypt it using becrypt.js
      const salt = await bcrypt.genSalt(10)
      const secPass = await bcrypt.hash(req.body.password, salt)

      // Creating the User
      user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      })

      //. Using JWT for sending token for authentication 
      const data = {
        // Sending ID for creating token
        user: {
          id: user.id
        }
      }

      const authtoken = jwt.sign(data, JWT_SECRET)
      // console.log(authtoken)

      res.json({ authtoken }) //. Response -> authtoken

      // Returning the response of above action here i am showing the user which is input by the developer 
      // res.json(user)
    }

    //.   If error occured then we console the error message 
    catch (error) {
      console.error(error.message)
      res.status(500).send("Some error occured")
    }
  }
)


// ROUTE 2 -->  Authenticate the user using : POST "/api/auth/login" . Doesn't require Auth -> No Login Required
router.post("/login", [
  body("email", "Enter a valid email").isEmail(),
  body("password", "Password cannot be blank").exists()],

  async (req, res) => {
    // If there are errors then return bad request
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() })
      // return;
    }

    const { email, password } = req.body; //.    Extracting email and password using Destructuring

    try {
      // Check if user exists or not 
      let user = await User.findOne({ email });
      if (!user) {
        return res.status(400).json({ error: "Please try to login with correct credentials" });
      }

      // Now compare the password 
      const passwordCompare = await bcrypt.compare(password, user.password);
      if (!passwordCompare) {
        return res.status(400).json({ success, error: "Please try to login with correct credentials" });
      }

      // if everything is right then we send the data 
      const data = {
        user: {
          id: user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);
      success = true;
      res.json({ authtoken })

    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }

  })

// ROUTE 3 -->  get logged-in user details using : POST "/api/auth/getuser" -> Login Required
router.post("/getuser",fetchuser ,async (req, res) => {
    try {
      const userId = req.user.id;
      const user = await User.findById(userId).select("-password")
res.send(user)
    } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");
    }
  }
)


module.exports = router;