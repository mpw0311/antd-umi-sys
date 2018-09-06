import { request } from 'utils';

export function logout(payload) {
  return request('/logout', {
    method: 'POST',
    body: JSON.stringify({
      ...payload,
    }),
  });
}
export function getSysInfo(payload) {
  const { STATUS, ...rest } = payload;
  return request('/getSysInfo', {
    method: 'POST',
    body: JSON.stringify({
      ...rest,
    }),
    setting: {
      STATUS
    }
  });
}