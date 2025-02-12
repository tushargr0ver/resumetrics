const express = require('express');
const { pdfParser } = require('./utils/pdfParser');
const { deleteFile } = require('./utils/deleteFile');
const { upload } = require('./utils/uploader');


const app = express();
const port = 3000;

app.post('/upload',upload.single('file'),async (req,res)=>{
    try{

    
    const result = await pdfParser(req.file.filename)
    
      
      console.log('file uploaded succesfully');
      
      
      res.json(result)
      deleteFile(`uploads/${req.file.filename}`)
      // console.log(result);
      

      
      
    }catch(error){
      res.status(500).send(error.message)
      deleteFile(`uploads/${req.file.filename}`)

    }
})

app.listen(port, ()=>{
    console.log('Server running');
    
})