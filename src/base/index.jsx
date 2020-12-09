import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { App } from 'app';

import { history, configureStore } from './store';

const store = configureStore();

export const mount = MountApp =>
  render(
    <Provider store={store}>
      <ConnectedRouter history={history}>
        <MountApp />
      </ConnectedRouter>
    </Provider>,
    document.getElementById('root'),
  );

mount(App);

if (module.hot) {
  module.hot.accept('app/index.js', () => {
    const NextApp = require('../app').App; // eslint-disable-line global-require
    mount(NextApp);
  });
}
