import { request } from 'utils';

export function login(payload) {
  return request('/login', {
    method: 'POST',
    body: JSON.stringify({
      ...payload,
    }),
  });
}