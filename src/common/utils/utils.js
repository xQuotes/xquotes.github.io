export function createReducer (initialState, handlers) {
    return function reducer(state = initialState, action) {
        if (handlers.hasOwnProperty(action.type)) {
            return handlers[action.type](state, action)
        } else {
            return state
        }
    }
}

export function convertText(text, Draft) {
  if(_.isString(text)) {
    return Draft.ContentState.createFromBlockArray(
      Draft.convertFromHTML(text)
    )
  } else {
    return Draft.convertFromRaw(text)
  }
}