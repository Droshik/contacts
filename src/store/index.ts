import { contactsReducer } from './reducers/contactsReducer';
import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";

export const store = createStore(contactsReducer, applyMiddleware(thunk));
