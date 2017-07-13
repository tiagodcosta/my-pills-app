import prescriptions from './prescriptions.json'

const initialState = {
  prescriptions,
  detailView: false,
  itemSelected: null,
  name: '',
  quantity: '',
  type: '',
  frequency: '',
  notes: '',
  loadingItems: false
};

export default (state = initialState, action ) => {
  switch (action.type) {

    case 'SELECTED_PRESCRIPTION':
        return {
          ...state,
          detailView: true,
          itemSelected: action.payload
        }

    case 'NONE_SELECTED':
          return {
            ...state,
            detailView: false,
            itemSelected: null
          }

    case 'FORM_UPDATE':
          return {
            ...state,
            [action.payload.prop]: action.payload.value
          }

    case "NEW_PRESCRIPTION":
          return initialState

    case "ADD_ITEM":
          return {
            ...state,
            ...action.newItem
          }
    default:
      return state
  }
}
