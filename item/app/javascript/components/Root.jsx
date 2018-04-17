import React from "react";
import PropTypes from "prop-types";
import Header from './Header';
import Item from './items/Item';

// const redux = redux.createRedux(reducers);
// redux.dispatch(loadLists());
// debugger
class Root extends React.Component {
  render() {
    return (
      <div>
        <Header />
      </div>
    )
  }
};

export default Root;
