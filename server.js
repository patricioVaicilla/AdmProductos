const express=require('express');
const cors=require('cors');
const app=express();
const port=3000;


require('./server/config/mongoose.config')

app.use(cors()); //esto es nuevo para solicitud de origen cruzado 
app.use(express.json());
app.use(express.urlencoded({extended:true}));

const userRoutes=require('./server/routes/product.routes');
userRoutes(app);

app.listen(port,()=>console.log("Server is listening at port",port));
