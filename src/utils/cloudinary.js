import { v2 as cloudinary } from "cloudinary";
import fs from "fs";

cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET
});

const uploadOnCloudinary = async (localFilePath) => {
  try {
    if (!localFilePath) return null;

    const response = await cloudinary.uploader.upload(localFilePath, {
      resource_type: "auto"
    });

    console.log("✅ CLOUDINARY RESPONSE:", response);

    return response;

  } catch (error) {
    console.log("❌ CLOUDINARY FULL ERROR:", error);   // 👈 MUST PRINT
    console.log("❌ CLOUDINARY MESSAGE:", error.message);

    fs.unlinkSync(localFilePath);
    return null;
  }
};

export { uploadOnCloudinary };






// import {v2 as cloudinary} from "cloudinary"
// import fs from "fs"


// cloudinary.config({ 
//   cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
//   api_key: process.env.CLOUDINARY_API_KEY, 
//   api_secret: process.env.CLOUDINARY_API_SECRET
// });

//   const uploadOnCloudinary = async (localFilePath) => {
//     try{
//         if(!localFilePath) return null
//         //upload file on cloudinary
//         const response = await cloudinary.uploader.upload(localFilePath, {
//           resource_type: "auto"
//       })
      
//       console.log("CLOUDINARY RESPONSE:", response); // 👈 yaha add kar
//       return response;

//       console.log("CLOUDINARY ERROR:", error.message);

//     }catch (error) {
//       console.log("❌ CLOUDINARY FULL ERROR:", error); // 👈 full error
//       console.log("❌ MESSAGE:", error.message);       // 👈 short msg
  
//       fs.unlinkSync(localFilePath);
//       return null;
  
//   }
// };

// export {uploadOnCloudinary}