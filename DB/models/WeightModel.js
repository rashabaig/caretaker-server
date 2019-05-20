const mongoose = require('../../connection');

var Weight = new mongoose.Schema({
    weight: Number,
    date: Date
})

module.exports = mongoose.model("Weight", Weight);
