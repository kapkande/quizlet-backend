import path = require("path");
const fs = require('fs');

export const getIcon = async (req: any, res: any) => {
    const userName = req.url.split('/').reverse()[0];

    const folderPath = path.join(__dirname, `../src/${userName}`);
    let filePath;

    fs.access(folderPath, fs.constants.F_OK, (err: any) => {
        if (!err) {
            const nameOfFile = fs.readdirSync(path.join(folderPath, 'icons'));
            filePath = path.join(folderPath, 'icons', nameOfFile[0]);
        } else {
            filePath = path.join(__dirname, '../src/user.svg');
        }

        res.sendFile(filePath, (err: any) => {
            if (err) {
                res.status(500).send('Internal Server Error');
            }
        });
    });
};