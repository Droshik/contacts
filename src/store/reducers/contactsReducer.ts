import { IState, ContactsAction, contactsActionsTypes } from './../../types';

const initialState: IState = {
  contacts: [],
  isLoading: false,
};

export const contactsReducer = (state = initialState, action: ContactsAction): IState => {
  switch (action.type) {
    case contactsActionsTypes.FETCH_CONTACTS:
      return { ...state, isLoading: true };

    case contactsActionsTypes.FETCH_CONTACTS_SUCCESS:
      return { contacts: action.payload, isLoading: false };

    case contactsActionsTypes.ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };

    default: return state;
  }
};

export type TContactsReducer = ReturnType<typeof contactsReducer>;
