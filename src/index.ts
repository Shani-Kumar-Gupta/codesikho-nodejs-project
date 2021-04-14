import { Server } from './server';

// Creating Server
// Initialization of Server
var server = new Server().app;
const port = 5000;

server.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})