const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const teamSchema = new Schema({
    teamName: {
        type: String,
        required: true,
        unique: true,
    },
    leaderName: {
        type: String,
        required: true,
    },
    leaderEmail: {
        type: String,
        required: true,
        unique: true,
    },
    leaderReg: {
        type: String,
        required: true,
        unique: true,
    },
    leaderYear: {
        type: Number,
        required: true,
    },
    members: [{
        name: {
            type: String,
            required: true,
        },
        reg: {
            type: String,
            required: true,
            unique: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        year:{
            type: Number,
            required: false,
        }
    }],
    college: {
        type: String,
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    }
});

module.exports = mongoose.model("Team",teamSchema);