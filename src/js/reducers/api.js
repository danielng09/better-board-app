const initialState = {
  postings: [],
  postDetail: {},
  page: 1,
  postings_total: 0,
  postings_shown: 0
}

export default function api(state = initialState, action) {
  switch(action.type) {
    case 'GET_POSTINGS_REQUEST':
      return {
        ...state,
        loadingPosts: true
      }

    case 'GET_NEW_POSTINGS_SUCCESS':
      return {
        ...state,
        postings: action.res.postings,
        page: action.res.page,
        postings_total: action.res.postings_total,
        postings_shown: action.res.postings_shown,
        loadingPosts: false
      }

    case 'GET_POSTINGS_SUCCESS':
      return {
        ...state,
        postings: state.postings.concat(action.res.postings),
        page: action.res.page,
        postings_total: action.res.postings_total,
        postings_shown: action.res.postings_shown,
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
