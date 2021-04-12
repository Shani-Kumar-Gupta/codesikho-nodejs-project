import { Router } from "express";
import { UserController } from "../controllers/UserController";

class UserRoutes {
    public router: Router;

    constructor(){
        this.router = Router();
        this.getRoutes();
        this.postRoutes();
        this.patchRoutes();
        this.deleteRoutes();
    }

    getRoutes(){
        // this.router.get('/login', (req: any,res, next) => {
        //     req.message = 'WE ARE HERE TO LOGIN';
        //     next();
        // }, (req: any,res) => {
        //     res.send(req.message);
        // }) // Single responsiblity principle

        this.router.get('/login', UserController.login);
    }

    postRoutes(){

    }

    patchRoutes(){

    }

    deleteRoutes(){

    }
}

export default new UserRoutes().router;