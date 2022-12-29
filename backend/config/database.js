const mongoose=require('mongoose');

const connectDatabase=()=>{
    mongoose.set("strictQuery", false);
    mongoose.connect('mongodb://127.0.0.1:27017/myapp',{useNewUrlParser:true}).then((data)=>{
        console.log(`database connected with server ${data.connection.host}`)
    }).catch((err)=>{
        console.log(err);
    })
}

module.exports=connectDatabase;