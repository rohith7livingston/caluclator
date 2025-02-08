const mongoose = require("mongoose");

const calculatorSchema = new mongoose.Schema({
    result: String
});

const CalculatorModel = mongoose.model("Calculators", calculatorSchema);

module.exports = CalculatorModel;
