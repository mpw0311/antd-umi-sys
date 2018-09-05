import { request } from 'utils';

export function logout(payload) {
  return request('/logout', {
    method: 'POST',
    body: JSON.stringify({
      ...payload,
    }),
  });
}