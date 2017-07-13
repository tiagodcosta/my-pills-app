import firebase from 'firebase'

export const selectItem = (itemId) => {
  return {
    type: 'SELECTED_PRESCRIPTION',
    payload: itemId
  };
}

export const noneItem = () => {
  return {
    type: 'NONE_SELECTED'
  }
}

export const formUpdate = ({prop, value}) => {
  return {
    type: 'FORM_UPDATE',
    payload: { prop, value }
  }
}

export const createNewItem = ({ name, quantity, type, frequency, notes }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/people`)
    .push({ name, quantity, type, frequency, notes })
    .then(() => {
      dispatch({ type: 'NEW_PRESCRIPTION'});
    })
  }
}
