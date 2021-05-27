//  Importing requirements.
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

require('dotenv').config(); //  To have the 'environment variables' in the '.env' file.

const usersRouter = require('./routes/user.routes');
const statusRouter = require('./routes/status.routes');
const taskRouter = require('./routes/task.routes');

//  Creating Express Server
const app = express();
const PORT = process.env.PORT || 5000;
var logNo = 0;

//  Connect to MongoDB database.
const URI = process.env.ATLAS_URI;
mongoose.connect(
    URI, {
        useNewUrlParser: true, 
        useUnifiedTopology: true 
    }
);
const connection = mongoose.connection;

//  listen for 'error' event 'on' the 'connection', if 'error' execute the arrow function. 
connection.on('error', err => {
    logNo++;
    console.log(`${logNo}>> Error while connecting to MongoDB database. ${err}`);
});
//  listen for 'disconnected' event 'on' the 'connection', if 'disconnected' execute the arrow function. 
connection.on('disconnected', () => {
    logNo++;
    console.log(`${logNo}>> Connection to MongoDB database lost.`);
});
//  listen for 'reconnect' event 'on' the 'connection', if 'reconnect' execute the arrow function. 
connection.on('reconnect', () => {
    logNo++;
    console.log(`${logNo}>> Re-Connected to MongoDB database.`);
});
//  'once' the 'connection' is 'open', execute the arrow function. 
connection.once('open', () => {
    logNo++;
    console.log(`${logNo}>> MongoDB database connection successfully established.`);
})

//  Middlewares
app.use(cors());
app.use(express.json());    //  Originally >app.use(bodyParser.json());< but now is included in express.

app.use('/users', usersRouter);
app.use('/status', statusRouter);
app.use('/task', taskRouter);


//  Function to start Server and listen to port no PORT.
app.listen(PORT, () => {
    console.log(`Server is running on PORT : ${PORT}.`);
    console.log(`You can now view the Task Tracker backend API's in the browser. http://localhost:${PORT}`);
})
