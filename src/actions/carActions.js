const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = price => {
  return { type: ADD_FEATURE, payload: price }
}