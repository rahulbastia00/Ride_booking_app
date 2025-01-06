const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const userSchema = new mongoose.Schema({
    fullname: {
        firstname: {
            type: String,
            required: true,
            minlength: [3, 'First name must be at least 3 characters'],
        },
        lastname: {
            type: String,
            // required: true, it is optional
            minlength: [3, 'Last name must be at least 3 characters'],
        }
    },
    email: {
        type: String,
        required: true,
        minlength: [5, 'Email must be at least 5 characters'],
        unique: true // Optional: Ensure email is unique
    },
    password: {
        type: String,
        required: true,
        select: false, // Do not return password by default
    },
    socketId: {
        type: String,
    },
});

// Instance method to generate JWT
userSchema.methods.generateAuthToken = function() {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h'});
    return token;
}

// Instance method to compare passwords
userSchema.methods.comparePassword = async function(password) {
    return await bcrypt.compare(password, this.password);
}

// Static method to hash passwords
userSchema.statics.hashPassword = async function(password) {
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('User', userSchema); // Changed 'user' to 'User ' for consistency

module.exports = userModel;