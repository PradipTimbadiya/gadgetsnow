const express = require('express');
const swaggerDocs=require('./swagger')
const app = express();
swaggerDocs(app);
const PORT = 8000 || process.env.PORT;
require('./db/conn');
const router = require('./router/router');

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use('/api/v1',router);

app.listen(PORT,()=>{
    console.log("done");
})



