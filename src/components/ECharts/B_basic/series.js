/**
 * author：M
 * E-mail: mpw0311@163.com
 */
import getType from './type';
export default (props) => {
    const { series, seriesSettings, data: { rows }, type, sort, seriesName } = props;
    const _series = rows.map((item, i) => {
        if (i === 0) {
            return undefined;
        } else {
            return {
                name: seriesName,
                type: getType(type),
                sort,
                ...seriesSettings,
            };
        }
    })
        .filter(item => item !== undefined);

    return series || _series;
}