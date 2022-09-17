const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const userschema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    phone: {
        type: Number,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    array1done:
    {
        type: Number,
        required: false,
        default: 0
    },
    array1code: {
        type: String,
        required: false,
        default: ''
    },
    tokens:
        [
            {
                token:
                {
                    type: String,
                    required: true
                }
            }
        ]

})


userschema.pre('save', async function (next) {
    if (this.isModified('password')) {
        this.password = bcrypt.hashSync(this.password, 12);
    }
    next();
});


userschema.methods.generateAuthToken = async function () {
    try {
        let token = jwt.sign({ _id: this._id }, process.env.SECRET_KEY);
        this.tokens = this.tokens.concat({ token: token });
        await this.save();
        return token;
    }
    catch (err) {
        console.log(err);
    }
}

userschema.methods.addmessage = async function (array1done, array1code) {
    try {
        this.array1done = this.array1done;
        this.array1code = this.array1code;
        await this.save();
        return this.array1done;
    }
    catch (err) {
        console.log(err)
    }
}


const User = mongoose.model('USER', userschema);

module.exports = User;