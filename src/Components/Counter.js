import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { decrementAction, incrementAction, resetAction } from '../Services/Action/CounterAction';

const Counter = () => {
    const count = useSelector(state => state.count)
    const dispatch = useDispatch()

    const handleIncrement = () => {
        dispatch(incrementAction())
    }
    const handleDecrement = () => {
        dispatch(decrementAction())
    }
    const handleReset = () => {
        dispatch(resetAction())
    }
    return (
        <div>
            <h2>Counter App</h2>
            <h3>Count : {count}</h3>
            <button onClick={handleIncrement}>Increment</button>
            <button onClick={handleDecrement}>Decrement</button>
            <button onClick={handleReset}>Reset</button>
        </div>
    );
};

export default Counter;

//store(src te file)- npm install redux
//react e store use krte ba provide krte -- npm install react-redux
//index.js->app.js->counter.js
//index.js(root)-->
// <Provider store={store}>
//  <App />
// </Provider>