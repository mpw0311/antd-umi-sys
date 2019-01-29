import {request} from '@utils';

export function fetch(payload) {
    return request(`/getPath`, {
        method: 'POST',
        body: JSON.stringify({
            ...payload
        }),
    });
}
export function getInfoTypeDict(payload) {
    return request(`/getPathDict`, {
        method: 'POST',
        body: JSON.stringify({
            ...payload
        }),
    });
}