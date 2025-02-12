const PdfParse = require("pdf-parse")
const fs = require('fs')
const { pdfToResult } = require("./openAIService")



 async function pdfParser(pdfname){
    try{
        const pdfBuffer = fs.readFileSync(`uploads/${pdfname}`)
        const data = await PdfParse(pdfBuffer)
        
        const trimData = data.text.split(' ').splice(0,500).join(' ')
        const result = await pdfToResult(trimData);
        // console.log(result);
             
            
        return result;
            
        }
        catch(error){
            console.log(error);
            throw(error)
            
        }
    }

module.exports = {pdfParser}
