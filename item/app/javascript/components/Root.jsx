import React from "react";
import { Provider } from 'react-redux';
import store from './store';
import Header from './Header';
import Item from './items/Item';

class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Header />
        <Item />
      </Provider>
    )
  }
};

export default Root;
