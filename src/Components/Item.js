import React, { Component } from 'react'
import {Link} from  "react-router-dom";

export default class Item extends Component {
 
  render() {
    let {titleProp, idItem, deleItemPropItem, onEditPropItem, descriptionPropItem, setIdForEditPropItem} = this.props
    return (
        <div className="item">
        <div className="right floated content">
          <div className="ui button" onClick={() => {onEditPropItem(titleProp, descriptionPropItem); setIdForEditPropItem(idItem)}}>Edit</div>
          <div className="ui button" onClick={()=> deleItemPropItem(idItem)}>Delete</div>
        </div>

        <Link to={`/detail/${idItem}`} className="content">{titleProp} </Link>
      </div>
    )
  }
}
