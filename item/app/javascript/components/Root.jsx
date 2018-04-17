import React from "react";
import { Provider } from 'react-redux';
import store from './store';
import Header from './Header';
import Item from './items/Item';

class Root extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Provider store={store}>
          <Item />
        </Provider>
      </div>
    )
  }
};

export default Root;
