import React from 'react';
import classes from './CounterOutput.css';


const CounterOutput = (props)=>{

  return (
 
      <button onClick={props.clicked} className={classes.btn}>{props.value} </button>
  
  );
}

export default CounterOutput;