import React from 'react';

import myClasses from './Person.module.css';


function person(props) {
    return (
        <div>
            <button className={myClasses.Person}>
                <p onClick={props.click}>Name: {props.name}, Age: {props.age}</p>
                <p>{props.children}</p>
                <input type="text" onChange={props.changed} value={props.name}></input>
            </button>
        </div>

    );
}

export default person;