/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description 
 */
export default (props) => {
    const {
        title,
        titleText,
        titleFontSize = 20,
        titleColor = "#333",
        titleFontWeight = 'normal',
        titleTop,
        titleBottom,
        titleLeft,
        titleRight
    } = props;

    return {
        text: titleText,
        textStyle: {
            color: titleColor,
            fontSize: titleFontSize,
            fontWeight: titleFontWeight,
        },
        top: titleTop,
        bottom: titleBottom,
        left: titleLeft,
        right: titleRight,
        ...title
    };
};