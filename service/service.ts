import fs from 'fs/promises';
import express from 'express';
import colors from 'colors';
import multer from 'multer';
import dotenv from 'dotenv';
dotenv.config();
colors.enable();
const PORT = process.env.PORT;
const BASE_ROUTE = process.env.BASE_ROUTE;
const upload = multer({ dest: 'temp/' })
const execSync = require('child_process').execSync;
const supportedMimetypes = ['wav', 'mp4','mpeg'];

async function transcribe(path_to_file: string){  
    return execSync(`python -W ignore whisp.py ${path_to_file}`).toString().trim();
}

console.log(`Server Listening on Port:`.yellow,`${PORT}!`.green);
const app = express();
app.post(`${BASE_ROUTE}/upload`, upload.single("audio"), async (req, res)=>{
    let filepath = "", mimetype = "";
    const response = {
        success: true,
        message: "",
        transcription: "",
    };

    try {
        console.log("Attempting Transcription...".yellow)
        if(!req.file?.path) 
            throw new Error("Upload Error!")
        else 
            filepath = req.file.path;

        if(!req.file?.mimetype) 
            throw new Error("Invalid Mimetype!")
        else 
            mimetype = req.file.mimetype.split("/")[1];
        if(!supportedMimetypes.includes(mimetype)) {
            throw new Error("Unsupported Mimetype!")
        }

        await fs.rename(filepath, `${filepath}.${mimetype}`);

        try {
            response.transcription = await transcribe(`${filepath}.${mimetype}`);
            if (response.transcription == '') throw new Error("Failed to Transcribe File")
            console.log(`Transcribed Message:`.yellow, `${response.transcription}`.green);
        } catch (err: unknown){
            throw new Error("Failed to Transcribe File");
        }

    } catch (err: unknown) {
        if (err instanceof Error){
            response.success = false;
            response.message = `Error! ${err.message ?  err.message : "Transcription Failed!"}`;
            console.log(response.message.red)
        };

    } finally {
        /** Unlinks Files */
        if(!response.message) response.message = "Successfully Transcribed File!";
        try {await fs.unlink(filepath);} catch (err : unknown){}
        try {await fs.unlink(`${filepath}.${mimetype}`);} catch (err : unknown){} 
        res.json(response);
    }
});
app.listen(PORT);




