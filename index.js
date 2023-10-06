const express =  require('express');
const app =express();

const bodyParser = require('body-parser');
const cors = require('cors');
// const cookieParser = require('cookie-parser');
const PORT = 8000;
const authRoutes = require('./Routes/Auth');
require('dotenv').config();
require('./db'); 

app.use(cors());
app.use(bodyParser.json());
app.use('/auth', authRoutes);



app.get('/', (req,res) =>{
    res.json({message:'The API is working'});
});


app.listen(PORT, () =>{
    console.log(`server is running on ${PORT}`);
})