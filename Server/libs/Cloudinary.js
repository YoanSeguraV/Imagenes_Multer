import {v2 as cloudinary} from 'cloudinary'
import {CloudinaryStorage} from 'multer-storage-cloudinary'

cloudinary.config({
    cloud_name: "dppb8utme",
    api_key: "232477895429981",
    api_secret: "3vzJcLPvkOVw5Y9LRdIjM_YoABo"
  });

  export const storage=new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
      folder: 'Productos'
    }
  })