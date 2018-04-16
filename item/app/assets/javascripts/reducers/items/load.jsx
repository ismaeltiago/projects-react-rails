import { LOAD_ITEMS } from '../constants/itemConstants';

const initialState = {
  items: []
};

export default function listItems(state = initialState, action) {
  if (action.type === LOAD_ITEMS) {
    return {
      ...state,
      items: action.json
    }
  }

  return state;
};
