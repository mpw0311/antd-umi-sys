/**
 * @author  M
 * @email mpw0311@163.com
 * @version  1.1.0
 * @description 
 * @git 
 */
export default (props) => {
    const { grid, gridTop, gridBottom, gridLeft, gridRight } = props;

    const gridOpt = {};
    if (gridTop && gridTop !== '') {
        gridOpt.top = gridTop;
    }
    if (gridBottom && gridBottom !== '') {
        gridOpt.bottom = gridBottom;
    }
    if (gridLeft && gridLeft !== '') {
        gridOpt.left = gridLeft;
    }
    if (gridRight && gridRight !== '') {
        gridOpt.right = gridRight;
    }
    return { ...gridOpt, ...grid };
};