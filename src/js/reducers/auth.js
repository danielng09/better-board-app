const initialState = {
  user: null
}

export default function auth(state = initialState, action) {
  switch(action.type) {
    case 'LOGIN':
      return {
        ...state,
        loading: true
      }

    case 'LOGIN_SUCCESS':
      return {
        ...state,
        loading: false,
        loaded: true,
        user: action.res.user
      }
    case 'LOGOUT':
      return {
        ...state,
        user: null,
        loading: false,
      }
    default:
      return state;
  }
}
