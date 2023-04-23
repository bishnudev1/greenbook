import { createReducer } from "@reduxjs/toolkit";


export const blogReducer = createReducer({}, {
    loadBlogsRequest: (state) => {
        state.loading = true;
    },
    loadBlogsSuccess: (state, action) => {
        state.loading = false;
        state.blogs = action.payload;
    },
    loadBlogsFailed: (state, action) => {
        state.loading = false;
        state.error = action.payload;
    },
    createBlogRequest: (state) => {
        state.loading = true;
    },
    createBlogSuccess: (state, action) => {
        state.loading = false;
        state.message = action.payload.message;
    },
    createBlogFailed: (state, action) => {
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