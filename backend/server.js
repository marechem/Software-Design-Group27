//This is how we create our express server and we will be on port 5000
const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;

// Routes
const loginRouter = require("./routes/login");

//This will allow us to parse JSON because we will be sending and receiving JSON
app.use(express.json());
app.use('/', loginRouter);

//This starts the server by listening on a certain port
app.listen(port, () => {
    console.log(`Server is running on port: ${port}`);
});

module.exports = app;