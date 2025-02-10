const PdfParse = require("pdf-parse")
const fs = require('fs')


 function pdfParser(pdfname){
    return new Promise((resolve,reject)=>{
        const pdfBuffer = fs.readFileSync(`uploads/${pdfname}`)
        PdfParse(pdfBuffer)
        .then(data=>{
            console.log(data.text);
            resolve(data.text)
            
        })
        .catch(error =>{
            console.log(error);
            reject(error)
            
        })
    })
}

module.exports = {pdfParser}
