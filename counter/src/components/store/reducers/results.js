import * as actionType from '../action';


const intialState = {
  results: []
}

const result = (state =intialState, action)=> {
  switch(action.type ){
      case actionType.STORE_RESULT: 
        return {
          ...state,
          results: state.results.concat({id: new Date(), value: action.result})
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

export default result;