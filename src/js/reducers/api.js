const initialState = {
  postings: [],
  postDetail: {},
  page: 1
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
        page: action.res.page,
        loadingPosts: false
      }

    case 'GET_POSTINGS_FAILURE':
      return {
        ...state,
        loadingPosts: false
      }

    case 'GET_POST_REQUEST':
      return {
        ...state,
        loadingPost: true
      }

    case 'GET_POST_SUCCESS':
      return {
        ...state,
        postDetail: action.res.postDetail,
        loadingPost: false
      }

    case 'GET_POST_FAILURE':
      return {
        ...state,
        loadingPost: false
      }

    default:
      return state;
  }
}
