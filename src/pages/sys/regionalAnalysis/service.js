import { request } from '@utils';

export function fetch(payload) {
    return request(`/getData`, {
        method: 'POST',
        body: JSON.stringify({
            ...payload
        }),
    });
}