import CryptoJS from 'crypto-js';

function findAndReplace(inputString, mergedJSON) {
   const parsedJSON = mergedJSON;
   let result = "";
   for (let i = 0; i < inputString.length; i++) {
      let char = inputString[i];
      if (char in parsedJSON)
         result += parsedJSON[char];
      else
         result += char;
   }

   // for (const [key, value] of Object.entries(parsedJSON)) {
   //    const regex = key;
   //    inputString = inputString.replace(regex, value);
   // }

   return result;
};

const baseCrybt2 = {
   a: 'n',
   b: 'z',
   c: 'y',
   d: 'a',
   e: 'p',
   f: 'w',
   g: 'u',
   h: 'l',
   i: 's',
   j: 'e',
   k: 'v',
   l: 'i',
   m: 'x',
   n: 'q',
   o: 'r',
   p: 'h',
   q: 'm',
   r: 'd',
   s: 'o',
   t: 'b',
   u: 'f',
   v: 'j',
   w: 'k',
   x: 't',
   y: 'c',
   z: 'g'
};
const baseDecrybt2 = {
   n: "a",
   z: "b",
   y: "c",
   a: "d",
   p: "e",
   w: "f",
   u: "g",
   l: "h",
   s: "i",
   e: "j",
   v: "k",
   i: "l",
   x: "m",
   q: "n",
   r: "o",
   h: "p",
   m: "q",
   d: "r",
   o: "s",
   b: "t",
   f: "u",
   j: "v",
   k: "w",
   t: "x",
   c: "y",
   g: "z"
};
export const decrypt = (decryptedText) => {
   decryptedText = findAndReplace(decryptedText, baseDecrybt2);

   const dataSplit = decryptedText.split(process.env.separatorCryptage);

   const decryptedMessage = dataSplit[0];

   const secretKey = dataSplit[1];

   const bytes = CryptoJS.AES.decrypt(decryptedMessage, secretKey);

   const decryptedData =JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
   //const decryptedData = bytes.toString(CryptoJS.enc.Utf8);

   return decryptedData;
};

export const encrypt = (encryptedText) => {
   const secretKey = CryptoJS.lib.WordArray.random(16).toString();

   const encryptedData = CryptoJS.AES.encrypt(JSON.stringify(encryptedText), secretKey).toString();

   let textcrypt = `${encryptedData}${process.env.separatorCryptage}${secretKey}`;

   textcrypt = findAndReplace(textcrypt, baseCrybt2);

   return textcrypt;
};

export const IsMatch = (cryptedText1, cryptedText2) => {
   const text1 = decrypt(cryptedText1);

   const text2 = decrypt(cryptedText2);

   return text1 === text2;
};

