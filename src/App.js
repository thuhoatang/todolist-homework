import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link } from "react-router-dom";
import DetailItem from "./Components/DetailItem";
import Home from "./Components/Home";
import Input from "./Components/Input";
import ListTodo from "./Components/ListTodo";

export default class App extends Component {
  state = {
    listTodo: [
      { title: "do do 1", description: "hueHFIQHFHHHHHHHHH" },
      { title: "do do 2", description: "hueHFIQHFHHHHHHHHH" },
      { title: "do do 3", description: "hueHFIQHFHHHHHHHHH" },
    ],
  };

  addTodo = (title, description) => {
    let newArr = this.state.listTodo;
    newArr.push({ title, description });
    this.setState({ listTodo: newArr });
  };

  getTotoList = (index) => {
    return this.state.listTodo.find((item, id) => id == index);
  };

  delItem = (id) => {
    let newArr = this.state.listTodo;
    newArr = newArr.filter((item, index)=> index!=id);
    this.setState({listTodo: newArr});
  }

  updateVal = (id, titleNew, descriptionNew) => {
    let newArr = this.state.listTodo;
    newArr[id] = {title: titleNew, description: descriptionNew}
    this.setState({listTodo: newArr})
  }
  render() {
    return (
      <div className="ui container">
        <Routes>
          <Route
            path="/"
            element={
              <Home
                listTodoProp={this.state.listTodo}
                addTodoProp={this.addTodo}
                deleItem={this.delItem}
                updateVal={this.updateVal}
              />
            }
          />
          <Route
            path="/detail/:id"
            element={
             <DetailItem getTotoListProp={this.getTotoList}/>
            }
          />
        </Routes>
      </div>
    );
  }
}
