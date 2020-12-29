import React, { Component } from 'react';

import Person from './Person/Person';
import classes from './App.module.css';



class App extends Component{

  state = {
    persons: [
      { id: 'adf1', name: 'Errol', age: 23 },
      { id: 'dsf1', name: 'Kalisha', age: 26 },
      { id: 'dadv2', name: 'Kenzie', age: 1 }
    ],
    otherState: 'some other value',
    showPersons: false
  }

  

  // switchNameHandler = (newName) => {
  //   // console.log('Was clicked');
  //     // dont do this: this.state.pesrons[0].name = 'Errollliee';
  //     this.setState({
  //       persons: [
  //         {name: 'Errol', age: 24},
  //         {name: newName, age: 21},
  //         {name: 'Ross', age: 17}

  //       ]
        
  //     });
  // }

  nameChangedHandler = (event, id) => {

    const personIndex = this.state.persons.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.persons[personIndex]
    };
    // const person = Object.assign({}, this.state.persons[personIndex]);

    person.name = event.target.value;

    const persons = [...this.state.persons];
    persons[personIndex] = person;

    this.setState({persons: persons});
  }

  togglePersonHandler = () => {
    // const doesShow = this.state.showPersons;
    this.setState({showPersons: !this.state.showPersons});
  }

  deletePersonHandler = (personIndex) => {
    // const persons = this.state.persons.slice(); in order to copy use .slice()
    const persons = [...this.state.persons]; //es6 way of copying an array
    persons.splice(personIndex, 1);
    this.setState({persons: persons})

  }

  render(){


    let persons = null;
    let btnClasses = [classes.Button]
    const assignedClasses = [];
    
    if(this.state.persons.length <= 2){
      assignedClasses.push('red');
    } 
    if(this.state.persons.length <= 1){
      assignedClasses.push('bold');
    }

    if (this.state.showPersons){
      persons = (
        <div>
          {this.state.persons.map((person, index) => {
            return <Person
              click={()=> this.deletePersonHandler(index)}
              name={person.name}
              age={person.age} 
              key={person.id}
              changed= {(event) => this.nameChangedHandler(event, person.id)}/>
          })}
          
        </div>
      );

      btnClasses.push(classes.Red);
    }

    return (
  
        <div className={classes.App}>
          <h1>Hi, Im a React App!</h1>
          <p className={assignedClasses.join(' ')}>This is really working</p>
          <button 
            className= {btnClasses.join(' ')}
            alt = {this.state.showPersons}
            onClick={() => this.togglePersonHandler()  }>Toggle Persons
          </button> 
          {persons}
      </div> 

          
      );
  } 
}

export default App;



