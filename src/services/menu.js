import { request } from '@utils';
// export function getMenuData() {
//   return request('/getMenuData', {
//     method: 'GET',
//   });
// }
export function getMenuData(payload) {
  return request('/getMenuData', {
    method: 'POST',
    body: JSON.stringify({
      ...payload,
    }),
  });
}