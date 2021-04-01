//This is how we create our express server and we will be on port 5000
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

//This will allow us to parse JSON because we will be sending and receiving JSON
app.use(cors());
app.use(express.json());

// Database connection
const uri = require("./config/keys").mongoURI;
mongoose.connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true})
    .then( () => console.log("MongoDB successfully connected"))
    .catch(err => console.log(err));



// Routes
const loginRouter = require("./routes/login");
const registerRouter = require("./routes/register");
const quoteFormRouter = require("./routes/quote");

app.use('/', loginRouter);
app.use('/register', registerRouter);
app.use('/newForm', quoteFormRouter);

//This starts the server by listening on a certain port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});
