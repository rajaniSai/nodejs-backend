const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: true,
        require: true
    },
    dob: {
        type: Date,
        required: true
    },
    address: {
        type: String,
        required: true
    }
}, {
    toJSON: { virtuals: true },  // Include virtuals when converting to JSON
    toObject: { virtuals: true }
}, {
    timestamps: true
});

module.exports = mongoose.model('userCollection', userSchema);