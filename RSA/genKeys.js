const crypto = require("crypto");
const fs = require("fs");
require('dotenv').config();
// generate keys
let { privateKey, publicKey } = crypto.generateKeyPairSync("rsa", {
    modulusLength: 2048,
    publicKeyEncoding: {
        type: "spki",
        format: "pem"
    },
    privateKeyEncoding: {
        type: 'pkcs8',
        format: 'pem',
        cipher: "aes-128-ecb",
        passphrase: process.env.PASSPHRASE
    }
});
// Keeping the keys in a safe place
fs.writeFileSync(`${process.env.DIR_KEYS}/pub_key`, publicKey);
fs.writeFileSync(`${process.env.DIR_KEYS}/priv_key`, privateKey);

