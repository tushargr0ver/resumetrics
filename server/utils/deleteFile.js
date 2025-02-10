const fs = require('fs')

function deleteFile(filePath){
    fs.unlink(filePath, (err)=>{
        if (err){
            console.error('Failed to delete file')
        }
        else{
            console.log('File deleted successfully');
            
        }
    })
}

module.exports = {deleteFile}