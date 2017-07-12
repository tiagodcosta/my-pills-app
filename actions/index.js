export const selectItem = (itemId) => {
  return {
    type: 'SELECTED_PRESCRIPTION',
    payload: itemId
  }
}

export const noneItem = () => {
  return {
    type: 'NONE_SELECTED'
  }
}
