
const crypto = require('crypto');
const fs = require("fs");
require('dotenv').config();

// Creating a function to encrypt string
function encryptString (plaintext, publicKeyFile) {
    const publicKey = fs.readFileSync(publicKeyFile, "utf8");

    const encrypted = crypto.publicEncrypt(publicKey, Buffer.from(plaintext));

    return encrypted.toString("base64");
}

// Defining a text to be encrypted
const fileContent = fs.readFileSync(`${process.env.TEXT_FILES_PATH}/data`, "utf8");

// Defining encrypted text
const encrypted = encryptString(fileContent, `${process.env.DIR_KEYS}/pub_key`);

fs.writeFileSync(`${process.env.TEXT_FILES_PATH}/encrypted_by_priv`, encrypted);

process.env.DEBUG == 1 && console.log(encrypted);
