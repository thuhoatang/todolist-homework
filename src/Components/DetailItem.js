import React, { Component } from 'react';
import {Link, useParams } from  "react-router-dom";

function DetailItem({getTotoListProp}) {
   

        let params = useParams();
        let objTodo = getTotoListProp(params.id);
        return (
            <div>
                <h2>Detail To do: {params.id} </h2>
                <h3>Title: {objTodo.title}</h3>
                <h3>Description: {objTodo.description}</h3>

            </div>
        );
  
}

export default DetailItem;