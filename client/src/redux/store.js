import { configureStore } from "@reduxjs/toolkit";
import { userReducer } from "./reducers/userReducer";
import { otherReducer } from "./reducers/otherReducer";
import { profileReducer } from "./reducers/profileReducer";

export const store = configureStore({
    reducer: {
        user: userReducer,
        other: otherReducer,
        profile: profileReducer
    },
});

export const backendUrl = "http://localhost:5000/api/v1";