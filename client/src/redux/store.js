import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { otherReducer } from "./reducers/otherReducer";
import { profileReducer } from "./reducers/profileReducer";
import { blogReducer } from "./reducers/blogReducer";

export const store = configureStore({
    reducer: {
        user: userReducer,
        other: otherReducer,
        profile: profileReducer,
        blog: blogReducer
    },
});

//export const backendUrl = "https://greenbook-server.onrender.com/api/v1";
export const backendUrl = "http://localhost:5000/api/v1";