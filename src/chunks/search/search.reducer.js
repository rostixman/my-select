export const types = {
  FETCH_SEARCH_REQUEST: '@SEARCH/FETCH_SEARCH_REQUEST',
  FETCH_SEARCH_SUCCESS: '@SEARCH/FETCH_SEARCH_SUCCESS',
  FETCH_SEARCH_FAILURE: '@SEARCH/FETCH_SEARCH_FAILURE',
};

export const initialState = {
  data: [],
  meta: {
    fetching: false,
    lastUpdate: Date.now(),
  },
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FETCH_SEARCH_REQUEST: {
      return {
        ...state,
        meta: {
          ...state.meta,
          fetching: true,
        },
      };
    }

    case types.FETCH_SEARCH_SUCCESS: {
      return {
        ...state,
        data: action.results,
        meta: {
          ...state.meta,
          fetching: false,
          lastUpdate: Date.now(),
        },
      };
    }

    case types.FETCH_SEARCH_FAILURE: {
      return {
        ...state,
        meta: {
          ...state.meta,
          fetching: false,
          lastUpdate: Date.now(),
        },
      };
    }

    default:
      return state;
  }
};

export const actions = {
  request: (query, lang) => ({ type: types.FETCH_SEARCH_REQUEST, query, lang }),
  success: results => ({ type: types.FETCH_SEARCH_SUCCESS, results }),
  failure: error => ({ type: types.FETCH_SEARCH_FAILURE, error }),
};
