// Creating Server
// Restart Server: rs
import * as express from 'express';

let app: express.Application = express();
const port = 5000;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

// Basic of Routing

app.get('/login', (req,res)=> {
    res.send("successfully logged in");
})

app.get('/api/test', (req,res)=> {
    res.send("this is a test request");
})