const crypto = require('crypto');
const fs = require("fs");
require('dotenv').config();


// Creating a function to decrypt string
function decryptString (ciphertext, privateKeyFile) {
    const privateKey = fs.readFileSync(privateKeyFile, "utf8");

    // privateDecrypt() method with its parameters
    const decrypted = crypto.privateDecrypt(
        {
            key: privateKey,
            passphrase: process.env.PASSPHRASE,
        },
        Buffer.from(ciphertext, "base64")
    );

    return decrypted.toString("utf8");
}


const fileContent = fs.readFileSync(`${process.env.TEXT_FILES_PATH}/encrypted_by_priv`, "utf8");
const decryptText = decryptString(fileContent, `${process.env.DIR_KEYS}/priv_key`);

fs.writeFileSync(`${process.env.TEXT_FILES_PATH}/decrypted_by_pub`, decryptText);

process.env.DEBUG == 1 && console.log(decryptText);