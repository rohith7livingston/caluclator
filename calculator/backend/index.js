const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Import the Calculator model
const CalculatorModel = require('./models/calculator');

// Connect to MongoDB
mongoose.connect("mongodb://127.0.0.1:27017/calculator", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log("Connected to MongoDB"))
.catch(err => console.log(err));

// POST route to save calculation results
app.post('/calculator', (req, res) => {
    CalculatorModel.create({ result: req.body.result })
        .then(calculator => res.json(calculator))
        .catch(err => res.json(err));
});

app.get("/calculator/history",(req,res)=>
{
    let data = CalculatorModel.find({})
                    .then((fill,rej) => {console.log("History fetched")
                    res.status(200).json(data);})
                    .catch(err => res.json(err));
    
})
// Start the server
app.listen(3001, () => {
    console.log("Server is running on port 3001");
});
