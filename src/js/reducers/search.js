const initialState = {
  text: ""
}

export default function search(state = initialState, action) {
  switch(action.type) {
    case "CHANGE_SEARCH_INPUT":
      return {
        ...state,
        searchInput: action.searchInput
      }
    default:
      return state;
  }
}
