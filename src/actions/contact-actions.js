import axios from "axios";

const url = '/contacts';

export function fetchContacts(){
  return dispatch => {
    dispatch({
      type: 'FETCH_CONTACTS',
      payload: axios.get(url)
    })
  }
}

export function fetchContact(_id) {
  return dispatch => {
    return dispatch({
      type: 'FETCH_CONTACT',
      payload: axios.get(`${url}/${_id}`)
    })
  }
}

export function newContact() {
  return dispatch => {
    dispatch({
      type: 'NEW_CONTACT'
    })
  }
}

export function updateContact(contact) {
  return dispatch => {
    return dispatch({
      type: 'UPDATE_CONTACT',
      payload: axios.put(`${url}/${contact._id}`, { contact: contact })
    })
  }
}

export function saveContact(contact) {
  return dispatch => {
    return dispatch({
      type: 'SAVE_CONTACT',
      payload: axios.post(url, { contact: contact })
    })
  }
}
