import { createStore } from 'redux';
import resortsReducer from './reducers/resortsReducer';

const Store= createStore(resortsReducer);

export default Store;
