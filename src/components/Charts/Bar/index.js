import Basic from '../Basic_line_bar';
export default (props) => {
    const {
        type = 'Bar',
        label = false,
        ...rest
    } = props;

    const _label = {
        normal: {
            show: true,
            position: 'top'
        }
    };
    return (
        <Basic
            type={type}
            label={label === true ? _label : undefined}
            {...rest}
        />
    );
};
