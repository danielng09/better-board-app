const initialState = {
  searchInput: "",
  sourceNames: { indeed: true,
                 github: true,
                 craigslist: true,
                 stackoverflow: true },
  datePosted: 'All'
}

export default function search(state = initialState, action) {
  switch(action.type) {
    case "CHANGE_SEARCH_INPUT":
      return {
        ...state,
        searchInput: action.searchInput
      }
    case "CHANGE_SOURCE_NAME":
      state.sourceNames[action.sourceName] = action.shouldUseSource;
      return state;
    case "CHANGE_DATE_POSTED":
      return {
        ...state,
        datePosted: action.datePosted
      }
    default:
      return state;
  }
}
