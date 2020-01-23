const ADD_FEATURE = "ADD_FEATURE";

export const addFeature = feat => {
  return { type: ADD_FEATURE, payload: feat }
}


const REMOVE_FEATURE = "ADD_FEATURE";

export const removeFeature = feat => {
  return { type: REMOVE_FEATURE, payload: feat }
}