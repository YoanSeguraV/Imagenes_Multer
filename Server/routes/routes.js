import { Router } from "express";
import { getAdmin, postAdmin, putAdmin } from "../controllers/controllers.js";
import multer from "multer";
import {storage} from '../libs/Cloudinary.js'

const upload = multer({
  storage: storage,
});



// const storage = multer.diskStorage({
//   destination: "./image",
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + file.originalname);
//   },
// });
// const upload = multer({
//   storage: storage,
// });
const router = Router();

router.get("/admin", getAdmin);
router.post("/admin", upload.fields([{name: "imgProducto"}]), postAdmin);
router.patch("/admin/:id", upload.single("foto"), putAdmin);

export default router;
