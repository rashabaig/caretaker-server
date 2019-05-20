const mongoose = require('../../connection');

var Metric = new mongoose.Schema({
    sugarLevel:[{
        type: Schema.Types.ObjectId,
        ref: "SugarLevel"
    }],
    bloodPressure: [{
        type: Schema.Types.ObjectId,
        ref: "BloodPressure"
    }],
    weight: [{
        type: Schema.Types.ObjectId,
        ref: "Weight"
    }]

});

module.exports = mongoose.model("Metric", Metric);
