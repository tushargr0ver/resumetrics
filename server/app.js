const express = require('express');
const { pdfParser } = require('./utils/pdfParser');
const { deleteFile } = require('./utils/deleteFile');
const { upload } = require('./utils/uploader');
const cors = require('cors');

const allowedOrigins = [
  'http://localhost:5173',
  'https://resumetrics.tushr.tech',
  'https://resumetrics.vercel.app/'
]

const app = express();

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  }
}));


const port = 3000;



app.post('/upload',upload.single('file'),async (req,res)=>{
    try{

    const data = await pdfParser(req.file.filename)
    const result = JSON.parse(data)
    
      
      console.log('file uploaded succesfully');
      
      
      res.json(result)
      deleteFile(`uploads/${req.file.filename}`)
      console.log(result);
      

      
      
    }catch(error){
      res.status(500).send(error.message)
      deleteFile(`uploads/${req.file.filename}`)

    }
})

app.listen(port, ()=>{
    console.log('Server running');
    
})