import { createStore } from 'redux';
import rootReducer from '../src/reducers/root';
import { composeWithDevTools } from "redux-devtools-extension"

const store = createStore(rootReducer, composeWithDevTools());
export default store;