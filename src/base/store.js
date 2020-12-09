import { createBrowserHistory } from 'history';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { routerMiddleware } from 'connected-react-router';
import createSagaMiddleware from 'redux-saga';
import { reducers } from './reducers';
import { sagas } from './sagas';

export const history = createBrowserHistory();
export const rootReducers = reducers(history);
const sagaMiddleware = createSagaMiddleware();
const initialState = {};
const enhanceCompose = composeWithDevTools({});

export const configureStore = () => {
  const store = createStore(
    rootReducers,
    initialState,
    enhanceCompose(applyMiddleware(...[routerMiddleware(history), sagaMiddleware])),
  );

  let sagaTask = sagaMiddleware.run(function* initSaga() {
    yield sagas();
  });

  if (module.hot) {
    module.hot.accept(['./store.js', './reducers.js'], () => {
      store.replaceReducer(rootReducers);
    });

    module.hot.accept('./sagas', () => {
      const nextRootSaga = require('./sagas').sagas; // eslint-disable-line global-require
      sagaTask.cancel();
      sagaTask.done.then(() => {
        sagaTask = sagaMiddleware.run(function* replacedSaga() {
          yield nextRootSaga();
        });
      });
    });
  }

  return store;
};
