export interface IContact {
  name: string
  lastname: string
  age: number
  pager: number
}


//contact reducer

export interface IState {
  contacts: IContact[]
  isLoading: boolean
}

export enum contactsActionsTypes {
  FETCH_CONTACTS = "FETCH_CONTACTS",
  FETCH_CONTACTS_SUCCESS = "FETCH_CONTACTS_SUCCESS",
  ADD_CONTACT = "ADD_CONTACT",
}

interface fetchContacts {
  type: contactsActionsTypes.FETCH_CONTACTS
}

interface fetchContactsSuccess {
  type: contactsActionsTypes.FETCH_CONTACTS_SUCCESS
  payload: IContact[]
}

interface addContact {
  type: contactsActionsTypes.ADD_CONTACT
  payload: IContact
}

export type ContactsAction = fetchContacts | fetchContactsSuccess | addContact
