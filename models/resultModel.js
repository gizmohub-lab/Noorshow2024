const mongoose = require('mongoose');

// Define the schema for storing team scores and top performer details
const scoreSchema = new mongoose.Schema({
    teamA: Number,
    teamB: Number,
    teamC: Number,
    teamD: Number,
    bidayatopper: String,
    bidayatopperscore: Number,
    uoolatopper: String,
    uoolatopperscore: Number,
    thaniyatopper: String,
    thaniyatopperscore: Number,
    thabawiyayatopper: String,
    thanawiyatopperscore: Number,
    aliyyatopper: String,
    aliyatopperscore: Number,
    kulliyatopper: String,
    kulliyatopperscore: Number
});

// Create a model based on the schema
const Score = mongoose.model('Score', scoreSchema);

module.exports = Score;
