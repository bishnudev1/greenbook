import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { otherReducer } from "./reducers/otherReducer";
import { profileReducer } from "./reducers/profileReducer";
import { blogReducer } from "./reducers/blogReducer";
import { orderReducer } from "./reducers/orderReducer";

export const store = configureStore({
    reducer: {
        user: userReducer,
        other: otherReducer,
        profile: profileReducer,
        blog: blogReducer,
        order: orderReducer
    },
});

//export const backendUrl = "https://greenbook-server.onrender.com/api/v1";
export const backendUrl = "http://localhost:5000/api/v1";