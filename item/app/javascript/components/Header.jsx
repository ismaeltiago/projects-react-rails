import React from "react";
import PropTypes from "prop-types";

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Header App</h1>
        <a href='http://localhost:3000'>Item</a> - <a href='http://localhost:3001'>Product</a>
        <h3>Com REDUX</h3>
      </div>
    )
  }
};

export default Header;
