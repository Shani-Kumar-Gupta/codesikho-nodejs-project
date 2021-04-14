export class UserController{
    
    // static login = (req,res,next) => {
    //     // if user and password match then return user else send error that password and user does not match
    //     const error = new Error('User does not exist');
    //     next(error);
    //     //res.send('WE ARE HERE TO LOGIN');
    // }

    static login(req, res, next){
        res.send(req.body);
    }

    static signup(req,res,next){
        res.send(req.body);
    }

}