import { LOAD_ITEMS } from '../constants';

const initialState = {
  items: []
};

export default function items(state = initialState, action) {

  switch(action.type) {

    case LOAD_ITEMS:
      return {
        ...state,
        items: action.json
      }

    default:
      return state;
  }
};
