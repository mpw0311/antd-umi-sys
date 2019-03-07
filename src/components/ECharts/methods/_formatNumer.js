
/**
 * 数字加逗号显示
 * @param {number} number
 * @param {number} limit
 * @returns {string} 
 */
export default (num, limit = 1000) => {
    if (typeof num !== 'number' && typeof num !== 'string') return num;
    num += "";
    if (num === "NaN") return num;
    const n = num.indexOf('.');
    let str = "";
    if (n > -1) {
        str = num.slice(n);
        num = num.slice(0, n);
    }
    const arr = num.split("");
    const len = arr.length;
    if (limit === 1000) {
        if (len >= 4) {
            arr.splice(-3, 0, ',');
        }
        if (len >= 7) {
            arr.splice(-7, 0, ',');
        }
        if (len >= 10) {
            arr.splice(-11, 0, ',');
        }
        if (len >= 13) {
            arr.splice(-15, 0, ',');
        }
    }
    num = arr.join("") + str;
    return num;
};