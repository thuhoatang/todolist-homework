import React, { Component } from "react";
import Input from "./Input";
import ListTodo from "./ListTodo";

export default class Home extends Component {
  state = { title: "", description: "", status: "CREATE", idForEdit: null};

  onEdit = (title, description) => {
    this.setState({ title: title, description: description, status: "EDIT" });
    console.log("da thay doi item");
  };

  setTitle = (title) => { 
    this.setState({title: title})
  }

  setDescription = (description) => {
    this.setState({description: description})
  }

  setStatus = (status) => {
    this.setState({status: status})
  }

  setIdForEdit = (id) => {
this.setState({idForEdit: id})
  }
  render() {
    let { listTodoProp, addTodoProp, deleItem, updateVal } = this.props;
    return (
      <div>
        <Input
          idForEditProp={this.state.idForEdit}
          statusPropInput={this.state.status}
          titlePropInput={this.state.title}
          setTitlePropInput={this.setTitle}
          setDescriptionPropInput={this.setDescription}
          setStatusPropsInput={this.setStatus}
          descriptionPropInput={this.state.description}
          addTodoProp={addTodoProp}
          updateValProp={updateVal}
        />
        <br />
        <ListTodo
          onEditProp={this.onEdit}
          deleItemPropItem={deleItem}
          listTodoProp={listTodoProp}
          setIdForEditProp={this.setIdForEdit}
        />
      </div>
    );
  }
}
