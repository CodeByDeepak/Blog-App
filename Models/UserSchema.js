const mongoose = require('mongoose');


const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,

    },
    password: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    blogs: {
        type: Array,
        default: [],
    }
    
})

userSchema.pre('save', async (req, res) =>{
    const user = this;

    if(user.isModified('password')){
        userpassword = await bcrypt.hash(user.password, 8);
    }
})

module.exports = mongoose.model('user', userSchema)