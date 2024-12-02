import { createSlice } from "@reduxjs/toolkit";
import initialContact from "../../contacts.json";

const slice = createSlice({
  name: "contacts",
  initialState: {
    items: initialContact,
  },
  reducers: {
    addContact: (state, action) => {
      return {
        ...state,
        items: [...state.items, action.payload],
      };
    },
    deleteContact: (state, action) => {
      return {
        ...state,
        items: state.items.filter((contact) => contact.id !== action.payload),
      };
    },
  },
});
export const { addContact, deleteContact } = slice.actions;

export default slice.reducer;
