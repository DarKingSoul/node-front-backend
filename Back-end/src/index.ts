import express from "express";
import multer from "multer";
import {OpenAIApi, Configuration} from 'openai'
import * as path from "path";
import cors from "cors";

// Inicializamos los endpoints
const app = express();
app.use(express.json());

const PORT = 9022;

app.use(cors());

const upload = multer({
    storage,
    fileFilter(req, file, callback: multer.FileFilterCallback) {
        const fileExtension = path.extname(file.originalname)
        if (!fileExtension.includes('.pdf')) {
            callback(new Error('Solo se aceptan archivos PDF'))
        }
        callback(null, true)
    }
})

const openai = new OpenAIApi(configuration)

app.get("/ping", (req, res):void => {
    console.log("alguien ha dado ping!!!");
    res.setHeader("Content-Type", "application/json");
    res.send("pong");
})

app.get("/hola/:nombre/:apellido", (req, res):void => {
    const nombre = req.params.nombre;
    const apellido = req.params.apellido;
    console.log("alguien ha ingresado sus nombres!!!");
    res.set('Content-Type', 'application/json');
    res.send({nombre: nombre, apellido: apellido});
})

app.post('/subir', upload.single('file'), async (req, res) => {
    if (!req.file || !req.body?.question) {
        return res.status(400).send()
    }
    const response = await process_doc(req.file?.filename, req.body.question)
    res.send(response)
})


app.listen(PORT, ():void => {
    console.log(`server running in port: ${PORT}`);
})