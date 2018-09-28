import Basic from '../Basic_line_bar';
export default (props) => {
    const {
        type = 'Area',
        stack = '总量',
        ...rest
    } = props;


    return (
        <Basic type={type} stack={stack} {...rest} />
    );
};
