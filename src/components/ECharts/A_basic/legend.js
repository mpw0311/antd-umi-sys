export default (props) => {
    const { legend, showLegend } = props;

    return {
        show: showLegend,
        ...legend
    };
}