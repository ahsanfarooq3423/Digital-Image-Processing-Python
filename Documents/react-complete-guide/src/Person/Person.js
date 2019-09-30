import React, {Component} from 'react';

import './Person.css';


const person = ( props ) => {

  
    return(
        <div className = 'Person'>
            <p className='people' onClick = {props.click} > Hi I'm  {props.name} and I'm {props.age} Years Old. </p>
            <p>{props.children}</p>
            <input type = 'text' onChange = {props.changed} value = {props.name}/>
        </div>
    )
    }



export default person;