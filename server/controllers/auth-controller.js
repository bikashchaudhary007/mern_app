
const User = require("../models/user-model");
const bcrypt = require("bcryptjs");


//Home Logics
const home = async (req, res) => {
    try {
        res.status(200).send("Welcome to MERN Appplication using router and controllers");
    } catch (error) {
        console.log(error);
    }
};

// Registration Logics
const register = async (req, res) => {
    try {
        // console.log(req.body);
        const { username, email, phone, password } = req.body;

        const userExist = await User.findOne({ email: email });
        if (userExist) {
            return res.status(400).json({ msg: "Email already exists" });
        }

        // //hash the password
        // const saltRound = 10;
        // const hash_password = await bcrypt.hash(password,saltRound);

        const userCreated = await User.create({ username, email, phone, password });

        // res.status(200).send("Welcome to MERN Application Registration using controllers");
        res.status(201).json({
            msg: userCreated,
            token: await userCreated.generateToken(),
            userId: userCreated._id.toString(),
        });

    } catch (error) {
        res.status(500).json({ message: "internal server error" });
        console.log(error);
    }
};

module.exports = { home, register };


