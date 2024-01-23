import path = require("path");
const fs = require('fs');

export const getSettingSvg = async (req: any, res: any) => {
    const filePath = path.join(__dirname, '../src/icons/setting.svg');
    // console.log(filePath);
    res.sendFile(filePath, (err: any) => {
        if (err) {
            res.status(500).send('Internal Server Error');
        }
    });
};