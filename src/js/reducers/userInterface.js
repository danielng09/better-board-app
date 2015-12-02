const initialState = {
  sidebarView: "details"
}

export default function userInterface(state = initialState, action) {
  switch(action.type) {
    case "SHOW_DETAILS":
      return {
        ...state,
        sidebarView: 'details'
      }
    case "SHOW_SEARCH":
      return {
        ...state,
        sidebarView: 'search'
      }
    default:
      return state;
  }
}
