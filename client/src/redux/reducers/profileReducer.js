import { createReducer } from "@reduxjs/toolkit";


export const profileReducer = createReducer({}, {
    updateUserRequest: (state) => {
        state.loading = true;
    },
    updateUserSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
    },
    updateUserFailed: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    updateUserPictureRequest: (state) => {
        state.loading = true;
    },
    updateUserPictureSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
    },
    updateUserPictureFailed: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearError: (state) => {
        state.error = null;
    },
    clearMessage: (state) => {
        state.message = null;
    }
});