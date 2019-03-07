/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description  AES加密解密
 */
import { AES, enc, mode, pad } from 'crypto-js';
/**
 * 初始化秘钥
 * @param {*} key |密钥 16 位
 * @param {*} iv |初始向量 initial vector 16 位,key 和 iv 可以一致
 */
const _init = (key = 'ANTD-#6$8Y-oi5&K', iv = key) => {
    return {
        key: enc.Utf8.parse(key),
        iv: enc.Utf8.parse(iv)
    };
};

/**
 * 加密
 * @param {string} str 
 */
export const encrypt = (str, aes_key) => {
    const { key, iv } = _init(aes_key);
    const encrypted = AES.encrypt(str, key, {
        iv,
        mode: mode.CBC,
        padding: pad.Pkcs7
    });
    // 转换为字符串
    return encrypted.toString();
};
/**
 * 解密
 * @param {string} encrypted 
 */
export const decrypt = (encrypted, aes_key) => {
    const { key, iv } = _init(aes_key);
    const decrypted = AES.decrypt(encrypted, key, {
        iv,
        mode: mode.CBC,
        padding: pad.Pkcs7
    });

    // 转换为 utf8 字符串
    return enc.Utf8.stringify(decrypted);
};