import React from "react";
import PropTypes from "prop-types";

class List extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false
    }
  }

  handleDelete(id) {
    this.props.handleDelete(id);
  }

  onUpdate(item) {
    this.props.onUpdate(item);
  }

  handleEdit(id) {
    this.props.handleEdit(id);
  }

  render() {
    var items= this.props.items.map((item) => {
      return (
        <div key={item.id}>
          <ItemShow item={item}
                handleDelete={this.handleDelete.bind(this, item.id)}
                handleUpdate={this.onUpdate}
                handleEdit={this.handleEdit} />
        </div>
      )
    });

    return(
      <div>
        <h2>List Items</h2>
        <div>
          {items}
        </div>
      </div>
    )
  }
};

export default List;
