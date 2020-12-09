import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';
import { app } from 'chunks/app';
import { reducer as search } from 'chunks/search';

export const reducers = history =>
  combineReducers({
    app: app.reducer,
    search,
    router: connectRouter(history),
  });
