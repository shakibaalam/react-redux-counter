import { createStore } from "redux";
import counterReducer from "./Services/Reducer/CounterReducer";

const store = createStore(counterReducer);

// store.subscribe(() => {
//     console.log(store.getState());
// })

// store.dispatch()

export default store;