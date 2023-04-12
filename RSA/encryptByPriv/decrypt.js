const crypto = require("crypto");
const fs = require("fs");
require('dotenv').config();

const encrypteData = fs.readFileSync(`${process.env.TEXT_FILES_PATH}/encrypted_by_priv`, "utf8");
const pubKey = fs.readFileSync(`${process.env.DIR_KEYS}/pub_key`, "utf8");

const decryptedString = crypto.publicDecrypt(pubKey, Buffer.from(encrypteData, "base64")).toString();

fs.writeFileSync(`${process.env.TEXT_FILES_PATH}/decrypted_by_priv`, decryptedString);

process.env.DEBUG == 1 && console.log(decryptedString);