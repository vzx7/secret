const crypto = require("crypto");
const fs = require("fs");
require('dotenv').config();

const encrypteData = fs.readFileSync(`${process.env.TEXT_FILES_PATH}/encrypted_data`, "utf8");
const pubKey = fs.readFileSync(`${process.env.DIR_KEYS}/pub_key`, "utf8");

const decryptedString = crypto.publicDecrypt(pubKey, Buffer.from(encrypteData, "base64")).toString();


console.log(`Decrypted: ${decryptedString}`);