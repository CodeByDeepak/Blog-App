const express = require('express');
const router = express.Router();
const user = require('../Models/UserSchema');

router.get('/test', async(req, res) =>{
    res.json({
        message: "User api is working"
    })
    
})


router.post('/register', async (req,res) =>{
    try {
        const  { name , email, password } = req.body;
        const existingUser = await User.findOne({emai: email});

        if(existingUser) {
            return res.status(409).json({ message: 'Email already exists'})
        }

       const newUser =  new User({
        name,
        password,
        email
       })

       new newUser.save();
       res.status(201).json({
        message: 'User registered successfully'
       })

    }
    catch (err) {
        res.status(500).json({message: err.message});
    }
})

module.exports = router;