/* eslint-disable */
import { store } from './store';
import { mount } from './index';

export const hot = (store, mount) => {
  if (module.hot) {
    module.hot.accept(0, () => {
      console.log('hot');
      const NextApp = require('../app').App;
      mount(NextApp, store);

      store.replaceReducer(require('./store').rootReducers);
    });
    // module.hot.accept('./root.jsx', temp => {
    //   console.log(temp);
    //   const NextApp = require('../app').App;
    //   mount(NextApp, store);
    //
    //   // store.replaceReducer(require('./store').rootReducers);
    // });
  }
};
