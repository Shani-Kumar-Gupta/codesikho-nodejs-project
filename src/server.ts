import * as express from 'express';
import { getEnvironmentVariable } from './environments/env';
import * as mongoose from 'mongoose';
import UserRoutes from './routers/UserRoutes';
export class Server {
    public app: express.Application = express();

    constructor(){
        this.setConfigurations();
        this.setRoutes();
    }

    setConfigurations(){
        this.setMongodb();
    }

    setMongodb(){
        const dbURL = getEnvironmentVariable().db_url;
        mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
            console.log("*/ MongoDB is Connected /*");
        }).catch(() => {
            console.log("*/ Mongodb not connected /*");
        })
    }

    setRoutes(){
        this.app.use('/api/user', UserRoutes);
    }
}