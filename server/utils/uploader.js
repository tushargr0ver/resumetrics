const multer = require("multer");




const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
      
      cb(null, file.originalname)
    }
  })
  
  
  const upload = multer({
      storage,
      fileFilter: (req, file, cb) => {
          if (file.mimetype !== 'application/pdf') {
              return cb(new Error('Only PDF files are allowed'), false);
          }
          cb(null, true);
      }
  });

  module.exports = {upload}