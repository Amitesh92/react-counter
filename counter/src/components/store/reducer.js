import * as actionType from './action';


const intialState = {
  counter: 0,
  results: []
}

const reducer = (state =intialState, action)=> {
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
      case actionType.STORE_RESULT: 
        return {
          ...state,
          results: state.results.concat({id: new Date(), value: state.counter})
        }
      case actionType.DELETE_RESULT:
        const updatedArray = state.results.filter(result => result.id !== action.resultElId );
        return {
          ...state,
          results: updatedArray
        }
      default :
        return state;
  }
}

export default reducer;