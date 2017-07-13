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
    firebase.database().ref(`/users/${currentUser.uid}/prescriptions`)
    .push({ name, quantity, type, frequency, notes })
    .then(() => {
      dispatch({ type: 'NEW_PRESCRIPTION'});
    })
  }
}

export const loadInitialItems = () => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/prescriptions`)
    .on('value', snapshot => {
      dispatch({type: 'INITIAL_FETCH', payload: snapshot.val() });
    });
  }
}

export const deleteItem = (uid) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/prescriptions/${uid}`)
    .remove()
    .then(() => {
      dispatch({ type: 'DELETE_ITEM'});
    })
  }
}

export const updateItem = (itemSelected) => {
  return {
    type: 'UPDATE_ITEM',
    payload: itemSelected
  }
}

export const saveItem = ({ name, quantity, type, frequency, notes, uid }) => {
  const { currentUser } = firebase.auth();

  return (dispatch) => {
    firebase.database().ref(`/users/${currentUser.uid}/prescriptions/${uid}`)
    .set({ name, quantity, type, frequency, notes, uid})
    .then(() => {
      dispatch({ type: 'SAVE_ITEM' });
    })
  }
}
