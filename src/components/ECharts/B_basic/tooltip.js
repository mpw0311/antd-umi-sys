/**
 * author：M
 * E-mail: mpw0311@163.com
 */
export default (props) => {
    const { tooltip, showTooltip } = props;
    return {
        shadow: showTooltip,
        ...tooltip
    };
}