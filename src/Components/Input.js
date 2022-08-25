import React, { Component } from "react";

class Input extends Component {
  // state = {title:"", description: ""}

  onSubmit = () =>{
      this.props.addTodoProp(this.props.titlePropInput, this.props.descriptionPropInput)
      // this.setState({title: "", description:""})
      this.props.setTitlePropInput("")
      this.props.setDescriptionPropInput("")
  }

  onUpdate = () => { 
    this.props.updateValProp(this.props.idForEditProp,this.props.titlePropInput, this.props.descriptionPropInput )
    
    this.props.setTitlePropInput("")
      this.props.setDescriptionPropInput("")
      this.props.setStatusPropsInput("CREATE")
  }

  render() {
    let { titlePropInput, descriptionPropInput, statusPropInput, setTitlePropInput, setDescriptionPropInput ,setStatusPropsInput, updateValProp} = this.props;

    return (
      <div className="">
        <form className="ui form">
          <div className="field">
            <label>Title</label>
            <input type="text" placeholder="To do..." value={titlePropInput} onChange={(e)=>setTitlePropInput(e.target.value)} />
          </div>
          {/* onChange={(e) => this.setState({title: e.target.value})} */}
          <div className="field">
            <label>Description</label>
            <textarea rows="2" value={descriptionPropInput}onChange={(e)=>setDescriptionPropInput(e.target.value)}></textarea>
            {/* onChange={(e) => this.setState({description: e.target.value})} */}
          </div>

          <button
            className="ui button"
            type="button"
            onClick={statusPropInput =="CREATE" ? () => this.onSubmit() : () =>this.onUpdate()}
          >
            {statusPropInput == "CREATE" ? "Add" : "Save"} To do
          </button>
        </form>
      </div>
    );
  }
}

export default Input;
