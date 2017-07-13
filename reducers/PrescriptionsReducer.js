const initialState = {
  prescriptions: [],
  detailView: false,
  itemSelected: null,
  name: '',
  quantity: '',
  type: '',
  frequency: '',
  notes: '',
  toUpdate: false
};

export default (state = initialState, action ) => {
  switch (action.type) {
    case 'INITIAL_FETCH':
        return {
          ...state,
          prescriptions: action.payload
        }

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
          return {
            ...state,
            name: '',
            quantity: '',
            type: '',
            frequency: '',
            notes: ''
          }

    case "ADD_ITEM":
          return {
            ...state,
            ...action.newItem
          }

    case "UPDATE_ITEM":
          return {
            ...state,
            toUpdate: true,
            name: action.payload.name,
            quantity: action.payload.quantity,
            type: action.payload.type,
            frequency: action.payload.frequency,
            notes: action.payload.notes,
            uid: action.payload.uid
          }

    case "SAVE_ITEM":
          return {
            ...state,
            toUpdate: false,
            detailView: false,
            name: '',
            quantity: '',
            type: '',
            frequency: '',
            notes: '',
            uid: ''
          }

    case 'DELETE_ITEM':
          return {
            ...state,
            detailView: false,
            itemSelected: null
          }
    default:
      return state
  }
}
