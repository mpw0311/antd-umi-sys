/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description 
 */
export default (type) => {
    const _type = type.toLowerCase();
    switch (_type) {
        case 'funnel':
            return 'funnel';
        default:
            return type;
    }
};