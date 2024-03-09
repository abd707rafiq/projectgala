const express=require('express')
const app=express();
const cors=require('cors');
const mongoose=require('mongoose');
const cookieParser =require('cookie-parser');
const authRouter =require("./routes/auth.routes") 



app.use(cors());

mongoose.connect("mongodb+srv://abdullahrafiq273:UC09l18sbqLWV4A7@cluster0.oyz9wbw.mongodb.net/")
.then(()=>{
    console.log("server is connected to database")
    
}).catch((error)=>{
    console.log(error);

})
//middlewares 


app.use(express.json());
app.use(cookieParser());

app.use('/',authRouter);



app.listen(5000,()=>{
    console.log('server is running on port 5000')
})