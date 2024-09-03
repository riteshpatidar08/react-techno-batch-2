import React from 'react';
import { useState, useReducer } from 'react';
function Reducer() {
  const initialState = {
    count: 0,
  };

  const reducer = (state, action) => {
    console.log(state, action);
    if (action.type === 'INCREMENT') {
      return { count: state.count + 1 };
    } else if (action.type === 'DECREMENT') {
      return { count: state.count - 1 };
    } else if (action.type === 'INCREMENTBY10') {
      return { count: state.count + action.payload };
    }
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1 className="text-center m-5 font-semibold text-3xl">
        Use Reducer Hook
      </h1>
      <p className="text-2xl font-semibold m-2">count : {state.count}</p>
      <button onClick={() => dispatch({ type: 'INCREMENT' })} className="btn">
        Increment
      </button>
      <button onClick={() => dispatch({ type: 'DECREMENT' })} className="btn">
        Decrement
      </button>
      <button
        onClick={() => dispatch({ type: 'INCREMENTBY10', payload: 10 })}
        className="btn"
      >
        Increment By 10
      </button>
    </div>
  );
}

export default Reducer;

//useReducer

//NOTE = initailState first we have to define the inital state in out applicaiton when using use reducer  , always a object

//NOTE = Reducer function =>  (state, action) => {

// }

//NOTE action =>  {
// type : '',
// payload : ''
// }

//dispatch = {
//NOTE always accepts a action , action is a javascript plain object which have type and payload property
// }

//NOTE state => updated state of the application
