import { initialState, types, actions, reducer } from './app.reducer';

export { saga } from './app.saga';
export const app = {
  initialState,
  types,
  actions,
  reducer,
};
