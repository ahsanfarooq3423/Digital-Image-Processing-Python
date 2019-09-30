import React, { Component } from 'react';
import Person from './Person/Person';
import './App.css';
import { throwStatement } from '@babel/types';

class App extends Component {
  state = {
    persons : [
      {id : 'asdfw', name: 'Ahsan', age: '22'},
      {id : 'werwa', name: 'Max', age: '23'},
      {id : '23sds', name: 'Stephanie', age: '32'}
    ],
    someValue : 'some value',
    showPerson : false
  }


  nameChangeHandler = ( event, id ) => {
    const personIndex = this.state.persons.findIndex( p => {
      return p.id === id;
    } )

    const person = {
      ...this.state.persons[personIndex]
    }

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;
    

    this.setState({ persons : persons })
  }



  togglePersonHandler = () => {
    const doesShow = this.state.showPerson;
    this.setState({showPerson : !doesShow})
  }


  
  deletePersonHandler = (personIndex) => {
    //const persons = this.state.persons;
    const persons = [...this.state.persons];
    persons.splice(personIndex,1);
    this.setState({persons: persons})
  }

 
  render(){
    const style = {
      backgroundColor : 'green',
      font : 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      
    }

    let persons = null;

    if ( this.state.showPerson ){
      persons = (
          <div> 
            {this.state.persons.map( ( person,index ) => {
              return <Person
                      click = {() => this.deletePersonHandler( index )}
                      name = {person.name}
                      age = {person.age}
                      key = {person.id}
                      changed = {(event) => this.nameChangeHandler(event , person.id)}/>
            } )}    
        </div> 
        )
        style.backgroundColor = 'red'
        

    }

    const classes = []
    if (this.state.persons.length <= 2){
      classes.push('red');
    }
    if (this.state.persons.length <= 1){
      classes.push('bold');
    }

    return(
     
        <div className = 'App'>
          <h1>Welcome to React App</h1>
          <h2>Closing the React App</h2>
          <p className = {classes.join(' ')}>This is really working!</p>
          <button 
            style = {style}
            onClick = {this.togglePersonHandler}>Toggle Persons
          </button>
          {persons}
        </div> 
      
    );
  }
}



export default Radium(App);

