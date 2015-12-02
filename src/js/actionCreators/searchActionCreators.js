export function updateSearchInput(searchInput) {
  return {
    type: "CHANGE_SEARCH_INPUT",
    searchInput: searchInput
  }
}

export function updateSourceNames(sourceName, shouldUseSource) {
  return {
    type: "CHANGE_SOURCE_NAME",
    sourceName: sourceName,
    shouldUseSource: shouldUseSource
  }
}

export function updateDatePosted(datePosted) {
  return {
    type: "CHANGE_DATE_POSTED",
    datePosted: datePosted
  }
}
