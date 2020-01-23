const UPDATE_TOTAL = "UPDATE_TOTAL";

export const updateTotal = price => {
  return { type: UPDATE_TOTAL, payload: price }
}