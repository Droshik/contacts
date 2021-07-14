import { Dispatch } from 'redux';
import { fakeFetch } from '../../api/fakeFetch';
import { ContactsAction, contactsActionsTypes, IContact } from './../../types';


export const fetchContacts = () => {
  return async (dispatch: Dispatch<ContactsAction>) => {
    dispatch({ type: contactsActionsTypes.FETCH_CONTACTS });

    const localState = localStorage.getItem('contactsState');
    let response;

    if (!localState) {
      response = await fakeFetch();
      localStorage.setItem('contactsState', JSON.stringify(response));

    } else {
      response = JSON.parse(localState);
    }

    dispatch({ type: contactsActionsTypes.FETCH_CONTACTS_SUCCESS, payload: response });
  }
}


export const addContact = (payload: IContact) => {
  return (dispatch: Dispatch<ContactsAction>, getState: any) => {
    localStorage.setItem('contactsState', JSON.stringify([...getState().contacts, payload]));
    dispatch({ type: contactsActionsTypes.ADD_CONTACT, payload });
  }
}