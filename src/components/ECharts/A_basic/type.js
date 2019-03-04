export default (type) => {
    const _type = type.toLowerCase();
    switch (_type) {
        case 'area':
            return 'line';
        default:
            return type;
    }
}