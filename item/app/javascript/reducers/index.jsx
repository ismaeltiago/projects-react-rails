// export { default as items } from './_itemReducers';


import { combineReducers } from 'redux';
import items from './items';

const rootReducer = combineReducers({
  items
});

export default rootReducer;