/**
 * @author M
 * @email mpw0311@163.com
 * @version  1.0.0
 * @description 
 */
import getType from './type';
export default (props) => {
    const { series, seriesSettings, data: { rows }, type, sort, seriesName } = props;
    const _geySeries = () => {
        return rows.map((item, i) => {
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
    };

    return series || _geySeries();
};