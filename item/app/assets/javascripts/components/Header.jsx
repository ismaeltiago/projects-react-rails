import React, { Component, PropTypes } from 'react';

class Header extends React.Component {
  render() {
    const { listItems } = this.props;

    return (
      <div>
        <h1>Header App</h1>
        <a href='http://localhost:3000'>Item</a> - <a href='http://localhost:3001'>Product</a>

        <div>
          <button onClick={() => listItems()}>Listar</button>
        </div>
      </div>
    )
  }
};

Header.propTypes = {
  listItems: PropTypes.func.isRequired
};
