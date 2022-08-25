import React, { Component } from "react";
import Item from "./Item";

class ListTodo extends Component {
  render() {
    let { listTodoProp, deleItemPropItem, onEditProp , setIdForEditProp} = this.props;

    const renderListTodo = listTodoProp.map((ele, index) => {
      return (
        <Item
          descriptionPropItem={ele.description}
          onEditPropItem={onEditProp}
          deleItemPropItem={deleItemPropItem}
          key={index}
          idItem={index}
          titleProp={ele.title}
          setIdForEditPropItem={setIdForEditProp}
        />
      );
    });
    return (
      <div>
        <div className="ui middle aligned divided list">{renderListTodo}</div>
      </div>
    );
  }
}

export default ListTodo;
