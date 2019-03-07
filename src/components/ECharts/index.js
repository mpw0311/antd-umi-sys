/**
 * @author M
 * @E-mail  mpw0311@163.com
 * @version  1.0.0
 * @description 
 */
import React, { Suspense } from 'react';
import { Skeleton } from 'antd';

const getComponent = Component => props => (
    <Suspense fallback={<Skeleton title={false} active />}>
        <Component {...props} />
    </Suspense>
);

const Area = getComponent(React.lazy(() => import('./charts/Area')));
const Bar = getComponent(React.lazy(() => import('./charts/Bar')));
const YBar = getComponent(React.lazy(() => import('./charts/Bar-y')));
const Line = getComponent(React.lazy(() => import('./charts/Line')));
const Funnel = getComponent(React.lazy(() => import('./charts/Funnel')));
const Pie = getComponent(React.lazy(() => import('./charts/Pie')));
const Sankey = getComponent(React.lazy(() => import('./charts/Sankey')));

export {
    Area,
    Bar,
    YBar,
    // BarWaterfall,
    Line,
    Funnel,
    Pie,
    // Map,
    // Pie,
    // PieCustom,
    // PieNest,
    // Radar,
    Sankey,
    // Scatter
};