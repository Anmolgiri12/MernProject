import mongoose from "mongoose";

dotenv.config();


function connection(){
    try{
        mongoose.connect(process.env.DB_HOST,{
            useNewUrlParser:true,
        }).then(()=>console.log("database connected")).catch((err)=>console.log('err'))
    }catch(err){
        console.log("database connection failed")
    }
}

export default connection;

