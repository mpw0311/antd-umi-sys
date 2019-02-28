export default (props) => {
    const { xAxis } = props;

    return {
        type: 'category',
        ...xAxis
    };
}