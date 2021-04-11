// Creating Server
// Restart Server: rs
import * as express from 'express';
import * as mongoose from 'mongoose';

let app: express.Application = express();
const port = 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

// Connecting to mongodb
mongoose.connect('mongodb+srv://mongodbUser:mongouser@mongodb.uujnj.mongodb.net/myFirstDatabase?retryWrites=true&w=majority', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("Mongodb is connected/");
}).catch(() => {
    console.log("Mongodb not able to connect");
})

// Basic of Middleware

// Common Middleware
app.use((req,res,next) => {
    console.log("common middleware called");
    next();
})
// Middleware used for login route
app.use('/login',(req,res,next) => {
    console.log("middleware called");
    next();
})

// Basic of Routing

app.get('/login', (req,res)=> {
    res.send("successfully logged in");
})

app.get('/middleware', (req: any,res,next) => {
    const data = {
        fullName: "Shani Kumar Gupta",
        college: "GLA University", 
    }
    req.user = data;
    next();
}, (req: any, res, next) => {
    console.log('called another middleware');
    res.send(req.user);
})

app.get('/api/test', (req,res)=> {
    res.send("this is a test request");
})