import { pool } from "../data/db.js";
import cloudinary from 'cloudinary'

export const getAdmin = async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM  tbl_admin");
    res.status(200).json(rows);
  } catch (error) {
    res.status(500).json("Error en el Servidor");
  }
};

export const postAdmin = async (req, res) => {
  try {

    
    const data = {
      nombre: req.body.nombre,
      descripcion: req.body.descripcion,
      foto: req.file.filename,
    };
    let url;
    if(data.foto){
      const result=await cloudinary.UploadStream.UploadStream(data.foto[0].path)
      url=result.secure_url
    }
    
      const [results] = await pool.query(
        "INSERT INTO tbl_admin (nombre,descripcion,foto) VALUES(?,?,?)",
        [data.nombre, data.descripcion, url]
      );
      if (results.affectedRows === 1) {
        res.status(200).json("Insertado Correctamente");
      } else {
        res.status(500).json("No se pudo insertar");
      }
    
  } catch (error) {
    res.status(500).json("Error en el Servidor");
  }
};

export const putAdmin = async (req, res) => {
    try {
      const data = {
        foto: req.file.filename,
      
      }
      const {id}=req.params
      if (data.foto) {
        const [results] = await pool.query(
          "UPDATE tbl_admin   SET foto=? WHERE id=?",
          [ data.foto,id]
        );
        if (results.affectedRows === 1) {
          res.status(200).json("Insertado Correctamente");
        } else {
          res.status(500).json("No se pudo insertar");
        }
      } else {
        res.status(500).json("Complete todos los campos 😊");
      }
    } catch (error) {
      res.status(500).json("Error en el Servidor");
    }
  };
  
