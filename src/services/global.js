import { request } from '@utils';
export function logout() {
  return request('/logout', {
    method: 'GET',
  });
}
export function getSysInfo(payload) {
  return request('/getSysInfo', {
    method: 'POST',
    body: JSON.stringify({
      ...payload,
    }),
  });
}
export function getMessage(payload) {
  return request('/getMessage', {
    method: 'POST',
    body: JSON.stringify({
      ...payload,
    }),
  });
}