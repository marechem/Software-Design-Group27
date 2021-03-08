const express = require('express');
const cors = require('cors');

//Configures so we can have the environment variables in the dotenv file
require('dotenv').config();

//This is how we create our express server and we will be on port 5000
const app = express();
const port = process.env.PORT || 5000;

//This is our cors middleware
app.use(cors());
//This will allow us to parse JSON because we will be sending and receiving JSON
app.use(express.json());

//This starts the server by listening on a certain port
app.listen(port, () => {
    console.log('Server is running on port: ${port}');
});