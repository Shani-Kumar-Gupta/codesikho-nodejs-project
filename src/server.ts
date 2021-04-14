import * as express from 'express';
import { getEnvironmentVariable } from './environments/env';
import * as mongoose from 'mongoose';
import UserRoutes from './routers/UserRoutes';
export class Server {
    public app: express.Application = express();

    constructor(){
        this.setConfigurations();
        this.setRoutes();
        this.error404Handler();
        this.handleError();
    }

    setConfigurations(){
        this.setMongodb();
        this.configureParser();
    }

    setMongodb(){
        const dbURL = getEnvironmentVariable().db_url;
        mongoose.connect(dbURL, {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
            console.log("*/ MongoDB is Connected /*");
        }).catch(() => {
            console.log("*/ Mongodb not connected /*");
        })
    }

    configureParser(){
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: true}));
    }

    setRoutes(){
        this.app.use('/api/user', UserRoutes);
    }

    error404Handler(){
        this.app.use((req,res) => {
            res.status(404).json({
                message: "Not Found",
                statusCode: 404
            })
        })
    }

    handleError() {
        this.app.use((error,req,res,next) => {
            const errorStatus = req.errorStatus || 500;
            res.status(errorStatus).json({
                message: error.message || 'Something went wrong: Please try again!',
                status_code: errorStatus
            })
        })
    }
}