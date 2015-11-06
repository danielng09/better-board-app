import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';

// const finalCreateStore = applyMiddleware(promiseMiddleware)(createStore);

export default function configureStore(initialState) {
  const store = createStore(reducer, initialState);
  return store;
}
