import { TypedUseSelectorHook, useSelector } from "react-redux";
import { TContactsReducer } from "../store/reducers/contactsReducer";

export const useTypedSelector: TypedUseSelectorHook<TContactsReducer> = useSelector;
