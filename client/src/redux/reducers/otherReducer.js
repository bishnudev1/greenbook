import { createReducer } from "@reduxjs/toolkit";


export const otherReducer = createReducer({}, {
    contactRequest: (state) => {
        state.loading = true;
    },
    contactSuccess: (state, action) => {
        state.loading = false;
        state.msgSent = true;
        state.success = action.payload.message;
    },
    contactFailed: (state, action) => {
        state.loading = false;
        state.msgSent = false;
        state.error = action.payload;
    },
    clearError: (state) => {
        state.error = null;
    },
    clearMessage: (state) => {
        state.message = null;
    }
});