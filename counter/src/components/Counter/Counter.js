import React, {Component} from 'react'
import classes from './Counter.css';
import {connect} from 'react-redux';
import CounterOutput from '../CounterOutput/CounterOutput';
import CounterResult from '../CounterResult/CounterResult';
import * as actionType from '../store/action';

class counter extends Component {
 render(){

    return (
      <div className={classes.Hello}>
        <CounterResult  value ={this.props.ctr}/>
        <CounterOutput clicked={this.props.onIncrementCounter}  value='Increment By One' />
        <CounterOutput clicked={this.props.onDecrementCounter}  value='Decrement By One' />
        <CounterOutput clicked={this.props.onAdd} value='Add 5' />
        <CounterOutput clicked={this.props.onReset} value='Reset Counter' />
        <hr />

        <button onClick={()=> this.props.onStoreResult(this.props.ctr)}>Store Result </button>
        <ul> 
        {this.props.storedResult.map( strResult => (
          <li key ={strResult.id} onClick={()=> this.props.onDeleteResult(strResult.id)}> {strResult.value} </li>
        ))}
        
        </ul>
      </div>
     );
  }
 
}
const mapStateToProps = state =>{
  return {
    ctr: state.ctr.counter,
    storedResult: state.res.results
  }
} 

const mapDispatchToProps = dispatch => {
  return {
    onIncrementCounter : () => dispatch({type: actionType.INCREMENT}),
    onDecrementCounter : () => dispatch({type: actionType.DECREMENT}),
    onAdd : () => dispatch({type: actionType.ADD}),
    onReset : () => dispatch({type: actionType.RESET}),
    onStoreResult : (result)=> dispatch({type: actionType.STORE_RESULT, result: result}),
    onDeleteResult : (id)=> dispatch({type: actionType.DELETE_RESULT, resultElId: id})
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(counter);