const express = require('express');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage })

const app = express();
const port = 3000;

app.get('/',(req,res )=>{
    res.send('Hello world')
})

app.post('/upload',upload.single('file'),(req,res)=>{
    res.json(req.file)
})

app.listen(port, ()=>{
    console.log('Server running');
    
})