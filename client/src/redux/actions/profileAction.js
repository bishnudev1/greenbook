import { backendUrl } from "../store";
import axios from "axios";


export const updateProfile = (name, email) => async (dispatch) => {
    try {
        dispatch({ type: "updateUserRequest" });
        const { data } = await axios.put(`${backendUrl}/update-profile`, { name, email }, {
            headers: {
                "Content-Type": "application/json",
            },
            withCredentials: true,
        });
        dispatch({ type: "updateUserSuccess", payload: data });

    } catch (error) {
        dispatch({ type: "updateUserFailed", payload: error.response.data.message });
    }
}

export const updateProfilePicture = (formdata) => async (dispatch) => {
    try {
        dispatch({ type: "updateUserPictureRequest" });
        const { data } = await axios.put(`${backendUrl}/update-dp`, formdata, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
        });
        dispatch({ type: "updateUserPictureSuccess", payload: data });

    } catch (error) {
        dispatch({ type: "updateUserPictureFailed", payload: error.response.data.message });
    }
}