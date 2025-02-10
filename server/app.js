const express = require('express');
const { pdfParser } = require('./utils/pdfParser');
const { deleteFile } = require('./utils/deleteFile');
const { upload } = require('./utils/uploader');





const app = express();
const port = 3000;

app.post('/upload',upload.single('file'),(req,res)=>{
    
    pdfParser(req.file.filename)
    .then(()=>{
      deleteFile(`uploads/${req.file.filename}`)
      console.log('file uploaded succesfully');
      res.send('File upload success')

      
      
    })
    .catch(error=>{
      res.status(500).send(error.message)
      deleteFile(`uploads/${req.file.filename}`)

    })
})

app.listen(port, ()=>{
    console.log('Server running');
    
})