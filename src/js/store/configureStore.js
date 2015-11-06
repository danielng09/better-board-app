import { createStore, applyMiddleware } from 'redux';
import reducer from '../reducers';

var promiseMiddleware = function () {
  return (next) => (action) => {
    const { types, promise, ...rest } = action;
    if (!promise) {
      return next(action);
    }
    const [REQUEST, SUCCESS, FAILURE] = types;

    next({ ...rest, type: REQUEST});
    return promise.then(
      (res) => next({ ...rest, res, type: SUCCESS }),
      (err) => next({ ...rest, err, type: FAILURE })
    );
  };
}

const finalCreateStore = applyMiddleware(promiseMiddleware)(createStore);

export default function configureStore(initialState) {
  const store = finalCreateStore(reducer, initialState);
  return store;
}
