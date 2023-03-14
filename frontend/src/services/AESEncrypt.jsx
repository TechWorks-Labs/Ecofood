import { AES } from 'crypto-js';
import CryptoJS from 'crypto-js';

const localStorageSetEncryptAESItem = ( key, value ) => {
    const hasEncrypt = JSON.stringify(value);
    const secretKey = (import.meta.env.VITE_REACT_APP_SECURE_LOCAL_STORAGE_HASH_KEY);
    const encrypt = AES.encrypt(hasEncrypt, secretKey).toString();
    localStorage.setItem(key, encrypt);
  }

  const localStorageGetEncryptAESItem = (key) => {
    const toDecrypt = localStorage.getItem(key);
    if (toDecrypt){
      const bytes = AES.decrypt(toDecrypt, import.meta.env.VITE_REACT_APP_SECURE_LOCAL_STORAGE_HASH_KEY);
      const decrypt = JSON.parse(bytes.toString(CryptoJS.enc.Utf8));
      return decrypt;
    }
  }

  const AESEncrypt = {
    localStorageSetEncryptAESItem,
    localStorageGetEncryptAESItem
  }
  export default AESEncrypt;