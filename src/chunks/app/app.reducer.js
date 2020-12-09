export const types = {
  LAUNCH: '@APP/LAUNCH',
  LAUNCHED: '@APP/LAUNCHED',
};

export const initialState = {
  init: false,
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.LAUNCH: {
      return {
        ...state,
        init: false,
      };
    }
    case types.LAUNCHED: {
      return {
        ...state,
        init: true,
      };
    }

    default:
      return state;
  }
};

export const actions = {
  launch: () => ({ type: types.LAUNCH }),
  launched: () => ({ type: types.LAUNCHED }),
};
