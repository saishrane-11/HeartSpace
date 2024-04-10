const express = require('express');
const router = express.Router();
const asyncHandler = require('express-async-handler');
const Users = require('../models/userModel')
const validateToken = require('../middleware/validateToken')
const jwt = require('jsonwebtoken')
// const getUsers = require('../controllers/userController')
// console.log(getUsers)
const bcrypt = require('bcrypt');

//current user get
router.route('/current').get(validateToken, asyncHandler(
    async (req, res) => {
        res.status(200).json(req.user);
    }
))



//GET ALL USER 'GET'
router.route('/').get(asyncHandler(
    async (req, res) => {
        const users = await Users.find();
        res.status(200).json(users);
    }
))


//create the user POST
//register
router.route('/register').post(asyncHandler(
    async (req, res) => {
        console.log("i am here in route")
        console.log("the req body is : ", req.body)
        const { name, email, password } = req.body;
        if (!name || !email || !password) {
            res.status(400);
            throw new Error("Enter all records")
        }
        const userAvailable = await Users.findOne({ email });
        if (userAvailable) {
            res.status(400);
            throw new Error("user already exists");
        }
        //HASH PASSWORD
        const hashedPassword = await bcrypt.hash(password, 10);
        console.log("hashedpassword", hashedPassword);
        const user = await Users.create({
            name,
            email,
            password: hashedPassword,
        })
        console.log(`user created : ${user}`);
        if (user) {
            res.status(201).json({ _id: user.id, email: user.email })
        } else {
            res.status(400);
            throw new Error("user data is not valid")
        }
        res.status(200).json({ message: "register the user" });
    }
))


//GET A USER 'GET'
router.route('/:id').get(asyncHandler(
    async (req, res) => {
        const user = await Users.findById(req.params.id);
        if (!user) {
            res.status(404);
            throw new Error("contact not found");
        }
        res.status(200).json(user);
    }
))


//login post
router.route('/login').post(asyncHandler(
    async (req, res) => {
        console.log("in the login here");
        console.log(req.body);
        const { email, password } = req.body;

        if (!email || !password) {
            res.status(400);
            throw new Error("All fields are mandatory")
        }
        const user = await Users.findOne({ email });
        console.log("ispresent:", user);
        console.log(bcrypt.compare(password, user.password));
        //compare password with hash password
        if (user && (await bcrypt.compare(password, user.password))) {
    console.log("done")
            const accessToken = jwt.sign({
                user: {
                    name: user.name,
                    email: user.email,
                    id: user.id,
                }
            }, "saish1234",         //saish1234 is an access token .env file is not working
                { expiresIn: "15m" }
            )
            console.log("success done");
           
            res.status(200).json({ accessToken });
            // res.json("success");
      
        } else {
            res.status(401);
            throw new Error("password not valid")
        }
        // res.json({ message: "login user" })
    }
))




module.exports = router;
