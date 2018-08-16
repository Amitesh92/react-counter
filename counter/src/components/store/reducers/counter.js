import * as actionType from '../action';


const intialState = {
  counter: 0
}

const counter = (state =intialState, action)=> {  
  switch(action.type ){
      case actionType.INCREMENT:
        return {
          ...state,
          counter : state.counter + 1
        }
      case actionType.DECREMENT:
        return {
          ...state,
          counter : state.counter - 1
        }
      case actionType.ADD :
        return {
          ...state,
          counter : state.counter + 5
        }
      case actionType.RESET:
        return {
          ...state,
          counter : state.counter = 0
        }
      default :
        return state;
  }
}

export default counter;