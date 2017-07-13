import prescriptions from './prescriptions.json'

const initialState = {
  prescriptions,
  detailView: false,
  itemSelected: null
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

    default:
      return state
  }
}
