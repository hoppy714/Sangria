const mongoose = require("mongoose");

const IncomeSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true,
    },
    plus: {
        type: String,
        min: 2,
        max: 8,
        required: true,
        default: "0",
    },
    minus: {
        type: String,
        min: 2,
        max: 8,
        required: true,
        default: "0",
    }
},
);

module.exports = mongoose.model("Income", IncomeSchema)