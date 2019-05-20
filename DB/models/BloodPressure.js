const mongoose = require('../../connection');

var BloodPressure = new mongoose.Schema({
    systolic: Number,
    diastolic: Number,
    date: Date
});

module.exports = mongoose.model("BloodPressure", BloodPressure);