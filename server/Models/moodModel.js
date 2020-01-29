const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const mongoDB = mongoose.connection;


// creates a moode schema for storing mood responses in mongoDB
const moodSchema = new Schema({
    mood: { type: String, required: true },
    responses: Array,
})

const Mood = mongoose.model("Mood", moodSchema);














module.exports = Mood;