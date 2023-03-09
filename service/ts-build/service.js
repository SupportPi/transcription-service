"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cluster = require('cluster');
const promises_1 = __importDefault(require("fs/promises"));
const express_1 = __importDefault(require("express"));
const colors_1 = __importDefault(require("colors"));
const multer_1 = __importDefault(require("multer"));
const dotenv_1 = __importDefault(require("dotenv"));
const bodyParser = require('body-parser');
const jsonParser = bodyParser.json(); // If necessary Later. Remove if not.
dotenv_1.default.config();
colors_1.default.enable();
const PORT = process.env.PORT;
const BASE_ROUTE = process.env.BASE_ROUTE;
const upload = (0, multer_1.default)({ dest: 'temp/' });
const execSync = require('child_process').execSync;
const supportedMimetypes = ['wav', 'mp4', 'mpeg'];
const cCPUs = require('os').cpus().length;
function transcribe(path_to_file) {
    return __awaiter(this, void 0, void 0, function* () {
        return execSync(`python -W ignore whisp.py ${path_to_file}`).toString().trim();
    });
}
if (cluster.isMaster) {
    // Create a worker for each CPU
    for (let i = 0; i < cCPUs; i++) {
        cluster.fork();
    }
    console.log(`Server Listening on Port:`.yellow, `${PORT}!`.green);
}
else {
    const app = (0, express_1.default)();
    app.post(`${BASE_ROUTE}/upload`, upload.single("audio"), (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b;
        let filepath = "", mimetype = "";
        const response = {
            success: true,
            message: "",
            transcription: "",
        };
        try {
            console.log("Attempting Transcription...".yellow);
            if (!((_a = req.file) === null || _a === void 0 ? void 0 : _a.path))
                throw new Error("Upload Error!");
            else
                filepath = req.file.path;
            if (!((_b = req.file) === null || _b === void 0 ? void 0 : _b.mimetype))
                throw new Error("Invalid Mimetype!");
            else
                mimetype = req.file.mimetype.split("/")[1];
            console.log(req.file.mimetype);
            console.log(filepath, mimetype);
            if (!supportedMimetypes.includes(mimetype)) {
                throw new Error("Unsupported Mimetype!");
            }
            yield promises_1.default.rename(filepath, `${filepath}.${mimetype}`);
            try {
                response.transcription = yield transcribe(`${filepath}.${mimetype}`);
                if (response.transcription == '')
                    throw new Error("Failed to Transcribe File");
                console.log(`Transcribed Message:`.yellow, `${response.transcription}`.green);
            }
            catch (err) {
                throw new Error("Failed to Transcribe File");
            }
        }
        catch (err) {
            if (err instanceof Error) {
                response.success = false;
                response.message = `Error! ${err.message ? err.message : "Transcription Failed!"}`;
                console.log(response.message.red);
            }
            ;
        }
        finally {
            /** Unlinks Files */
            if (!response.message)
                response.message = "Successfully Transcribed File!";
            try {
                yield promises_1.default.unlink(filepath);
            }
            catch (err) { }
            try {
                yield promises_1.default.unlink(`${filepath}.${mimetype}`);
            }
            catch (err) { }
            res.json(response);
        }
    }));
    app.listen(PORT);
}
