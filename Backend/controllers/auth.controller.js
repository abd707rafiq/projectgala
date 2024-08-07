const User = require('../models/usermodel')
const bcryptjs = require('bcryptjs')
const jwt = require('jsonwebtoken');

const signUp = async (req, res) => {
    const { username, email, password } = req.body;
    const hashPassword = bcryptjs.hashSync(password, 10);
    const newUser = new User({ username, email, password: hashPassword });
    try {
        await newUser.save();
        res.status(201).json("User Singup succesfully");
    } catch (e) {

        console.log(e);
    }
}
const signIn = async (req, res) => {
    const { email, password } = req.body;
    console.log('Received email:', email);
    try {
        const validUser = await User.findOne({ email });
        if (!validUser) {

            return res.status(404).json("user not found xyx");

        }


        const validPassword = bcryptjs.compareSync(password, validUser.password);
        if (!validPassword) {
            return res.status(401).json("password is in correct")
        }
        const token = jwt.sign({ id: validUser._id }, 'abc123');
        const { password: pass, ...restInfo } = validUser._doc;
        res.cookie('access_token', token, { httpOnly: true })
            .status(200)
            .json(restInfo);


    } catch (e) {

        console.log(e);

    }
}

const google = async (req, res) => {
    
        try {
            const user = await User.findOne({ email: req.body.email })
            if (user) {
              const token = jwt.sign({ id: user._id }, 'abc123');
              
              const { password: pass, ...rest } = user._doc;
              res
                .cookie('access_token', token, { httpOnly: true })
                .status(200)
                .json(rest);
        
            } else {
              const generatedPassword = Math.random().toString(36).slice(-8) + Math.random().toString(36).slice(-8);
              const hashedPassword = bcryptjs.hashSync(generatedPassword, 10);
              const newUser = new User({ username: req.body.name.split(" ").join("").toLowerCase() + Math.random().toString(36).slice(-4) , email: req.body.email, password: hashedPassword, avatar: req.body.photo });
              await newUser.save();
              const token = jwt.sign({ id: newUser._id }, 'abc123');
              const { password: pass, ...rest } = newUser._doc;
              res.cookie('access_token', token, { httpOnly: true }).status(200).json(rest);
        
            }



    }
    catch (error) {
        console.log("could not sign in by google", error)

    }

}

module.exports = { signUp, signIn, google };