const initialState = {
    additionalPrice: 0
}

export const totalReducer = (state = initialState, action) => {
  switch(action.type) {
    case "UPDATE_TOTAL":
      console.log(`From TotalReducer`, state)
      return {
        ...state,
        additionalPrice: state.additionalPrice + action.payload
      }
    default:
      return state
  }
}

