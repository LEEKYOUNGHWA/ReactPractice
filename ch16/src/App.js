import React from 'react';
import {createStore} from 'redux'
import {connect, Provider} from 'react-redux'

const Counter = ({value,increment,decrement}) => {
  return (
    <div>
      <h1>숫자증가감소 : {value}</h1>
      <button onClick={increment}>증가</button>
      <button onClick={decrement}>감소</button>
    </div>
  )
};

// connect, 매핑
const mapStateToProps = (state) =>{
  return {
    value : state.count
  }
}
const mapDispatchToProps = (dispatch) => {
  return { 
    increment : () => dispatch( {type : 'INCREMENT'}),
    decrement : () => dispatch( {type: 'DECREMENT'})
  }
}

const ReduxContainer = connect (
  mapStateToProps,
  mapDispatchToProps
)(Counter)

//리듀서
const initState = { count: 0}
const reducer = (state=initState , action) =>{
  
  switch(action.type){
    case 'INCREMENT' : 
    return {
      ...state,
      count : state.count+1
    }

    case 'DECREMENT' : 
    return {
      ...state,
      count : state.count -1
    }

    default : 
    return state
  }
}

const App = () =>{
  const store = createStore(reducer)
  return (
    <Provider store ={store}>
      <ReduxContainer/>
    </Provider>
  )
}
export default App;