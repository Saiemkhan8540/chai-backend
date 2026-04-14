// import multer from "multer";


// const storage = multer.diskStorage({
//     destination: function (req, file, cb) {
//       cb(null, "./public/temp")
//     },
//     filename: function (req, file, cb) {
      
//       cb(null, file.originalname)
//     }
//   });
  
//   export const upload = multer({ storage })





  import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/temp"); // ✅ FIXED (relative path)
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname); // better naming
  },
});

export const upload = multer({ storage });