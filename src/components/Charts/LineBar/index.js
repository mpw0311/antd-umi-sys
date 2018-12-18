import Basic from '../Basic_line_bar';
export default (props) => {
  const {
    type = 'Line',
    originOption = {
      toolbox: {
        show: true,
        feature: {
          magicType: { type: ['line', 'bar'] },
        }
      },
    },
    ...rest
  } = props;


  return (
    <Basic type={type} {...rest} originOption={originOption} />
  );
};
