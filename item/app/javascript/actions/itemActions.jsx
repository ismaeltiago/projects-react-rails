import { ROOT, LOAD_ITEMS } from '../constants/itemConstants';

function receiveItems(items) {
  return {
    type: LOAD_ITEMS,
    json: items
  }
};

export function loadItems(id) {
  return dispatch => {
    $.get(`${ROOT}/items`)
      .set('Accept', 'application/json')
      .end((error, res) => {
        if (res) {
          dispatch(receiveItems(res.body));
        }
      });
  }
};

