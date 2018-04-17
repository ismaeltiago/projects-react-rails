import { LOAD_ITEMS } from '../constants/itemConstants';

const initialState = {
  items: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case LOAD_ITEMS:
      return {
      ...state,
      items: action.json
    };
    default:
      return state;
  }
};