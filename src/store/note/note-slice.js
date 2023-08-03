import { createSlice } from "@reduxjs/toolkit";

export const noteSlice = createSlice({
    name: "note",
    initialState: {
        notes: [],
    },
    reducers: {
        setNoteList: (currentSlice, action) => {
            currentSlice.noteList = action.payload;
        }
    }
});

export const noteReducer = noteSlice.reducer;

export const { setNoteList } = noteSlice.actions;