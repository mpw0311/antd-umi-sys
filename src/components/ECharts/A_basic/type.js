/**
 * author：M
 * E-mail: mpw0311@163.com
 */
export default (type) => {
    const _type = type.toLowerCase();
    switch (_type) {
        case 'area':
            return 'line';
        case 'bar-y':
            return 'bar';
        default:
            return type;
    }
}