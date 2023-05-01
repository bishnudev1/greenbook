import { createReducer } from "@reduxjs/toolkit";


export const orderReducer = createReducer({}, {
    orderPlantRequest: (state) => {
        state.loading = true;
    },
    orderPlantSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
    },
    orderPlantFailed: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    clearError: (state) => {
        state.error = null;
    },
    clearMessage: (state) => {
        state.success = null;
    }
});