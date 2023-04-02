import user from "../models/user.js";


class Usercontroller{
    async index(req,res){
        res.send("hello from user");
    }

    async store(req,res){
        const user = await user.create(req.body);
        return res.json(user);
    }


}
export default  Usercontroller;