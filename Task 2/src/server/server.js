const express = require('express');
const cors = require('cors');
const path = require('path');
const server = express();

server.use(cors());
server.use(express.static(path.join(__dirname,'../locale')));
server.listen(3000, message =>{
    if(message){
        console.log(message);
    }else{
        console.log('Server started');
    }
})
server.get('/', (req,res)=>{
    res.sendfile(path.join(__dirname, '../locale/index.html'));
});

