const initialState = {
  postings: []
}

export default function api(state = initialState, action) {
  switch(action.type) {
    case 'GET_POSTINGS_REQUEST':
      return {
        ...state,
        loadingPosts: true
      }
    case 'GET_POSTINGS_SUCCESS':
      return {
        ...state,
        postings: action.res.postings,
        loadingPosts: false
      }
    case 'GET_POSTINGS_FAILURE':
      return {
        ...state,
        loadingPosts: false
      }
    default:
      return state;
  }
}
