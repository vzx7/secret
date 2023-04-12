const crypto = require("crypto");
const fs = require("fs");
require('dotenv').config();

const fileContent = fs.readFileSync(`${process.env.TEXT_FILES_PATH}/data`, "utf8");
const privateKey = fs.readFileSync(`${process.env.DIR_KEYS}/priv_key`, "utf8");

// 
const encryptedString = crypto.privateEncrypt({
    key: privateKey,
    passphrase: process.env.PASSPHRASE
}, Buffer.from(fileContent)).toString("base64");

fs.writeFileSync(`${process.env.TEXT_FILES_PATH}/encrypted_by_priv`, encryptedString);

process.env.DEBUG == 1 && console.log(encryptedString);



