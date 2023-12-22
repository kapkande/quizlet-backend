
const fs = require('fs');
import path = require("path");
const multer = require('multer');

const storage = multer.diskStorage({
    destination: function (req: any, file: any, cb: any) {
        const uploadDir = path.join(__dirname, '../', `/src/${req.headers.username}/icons`);
        if (!fs.existsSync(uploadDir)) {
            fs.mkdirSync(uploadDir, { recursive: true });
        }
        cb(null, uploadDir);
    },
    filename: function (req: any, file: any, cb: any) {
        const uploadDir = path.join(__dirname, '../', `/src/${req.headers.username}/icons`);
        const files = fs.readdirSync(uploadDir);
        if (files.length) {
            files.forEach((file: any) => {
                const filePath = path.join(uploadDir, file);
                fs.unlinkSync(filePath);
                // console.log(`Файл ${file} удалён.`);
            });
        }
        cb(null, file.originalname);
        // req.iconSrc = `${req.headers.username}/icons` + '/' + file.originalname;
    },
});

const upload = multer({ storage: storage });
export const uploadIcon = upload.single('file');