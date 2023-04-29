import CryptoJS from 'crypto-js';
import config from "./configs/config";

export const decrypt = (decryptedText) => {
   const dataSplit = decryptedText.split(config.separatorCryptage);

   const decryptedMessage = dataSplit[0];

   const secretKey = dataSplit[1];

   const bytes = CryptoJS.AES.decrypt(decryptedMessage, secretKey);

   const decryptedData = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));

   return decryptedData;
};

export const encrypt = (encryptedText) => {
   const secretKey = CryptoJS.lib.WordArray.random(16).toString();

   const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(encryptedText), secretKey).toString();

   const textcrypt = `${encryptedData}${config.separatorCryptage}${secretKey}`;

   return textcrypt;
};

export const IsMatch = (cryptedText1, cryptedText2) => {
   const text1 = decrypt(cryptedText1);

   const text2 = decrypt(cryptedText2);

   return text1 === text2;
};