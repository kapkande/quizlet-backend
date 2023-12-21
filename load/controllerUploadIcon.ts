import { SQL } from "../SQL";
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
import * as mysql from 'mysql2/promise';
import { connection } from "../connection";
import { config } from "../config";
import path = require("path");
const fs = require('fs');
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req:any, file:any, cb:any) {
        const uploadDir = path.join(__dirname, '/test');
        cb(null, uploadDir);
    },
    filename: function (req:any, file:any, cb:any) {
        cb(null, 'hello2.txt');
    },
});

const upload = multer({ storage: storage });

export const uploadIcon = upload.single('file');

// Ваш обработчик запроса
export const handleUpload = async (req:any, res:any) => {
    try {
        const file = req.file;

        if (!file) {
            res.status(400).json({ error: 'No file uploaded' });
            return;
        }

        // Ваш код обработки файла, если необходимо

        res.status(200).json({ message: 'File uploaded successfully' });
    } catch (error) {
        console.log(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
};