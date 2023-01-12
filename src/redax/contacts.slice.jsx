import { createSlice } from '@reduxjs/toolkit'
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const contactsSlice = createSlice({
    name: 'contacts',
    initialState: {contacts:
        [{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },]},
    reducers: {
        addContact(state, action) {
            state.contacts.unshift(action.payload)
        },

        deleteContact(state, action) {
            state.contacts = state.contacts.filter(
            contact => contact.id !== action.payload
        );
        
        },
    }
})
    const persistConfig = {
    key: 'contacts',
    storage,
};

export const persistContactsReducer = persistReducer(persistConfig, contactsSlice.reducer);

export const { addContact, deleteContact } = contactsSlice.actions;




