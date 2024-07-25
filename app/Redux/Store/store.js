// store.js
import { createStore } from 'redux';
import rootReducer from './reducers'; // Ensure you have your root reducer

const store = createStore(rootReducer);

export default store;