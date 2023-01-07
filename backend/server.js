const express=require('express');
const app=express();

const connectDatabase=require('./config/database');
// connectDatabase();

app.use(express.json());
app.use(express.urlencoded({extended:true}));

//routes
const user=require('./routes/user')
app.use(user);

const server=app.listen(8000, () => {
    console.log(`server is running on localhost 8000`);
});