import { request } from '@utils';

export function login(payload) {
  return request('/login', {
    method: 'POST',
    data: {
      ...payload,
    }
  });
}