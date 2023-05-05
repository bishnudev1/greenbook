import axios from 'axios';
import { backendUrl } from '../store';


export const contact = (name, email, message) => async (dispatch) => {
    try {
        dispatch({ type: "contactRequest" });

        const { data } = await axios.post(`${backendUrl}/contact`, { name, email, message }, {
            headers: {
                "Content-Type": "application/json"
            },
            withCredentials: true
        });

        dispatch({ type: "contactSuccess", payload: data });
    } catch (error) {
        dispatch({ type: "contactFailed", payload: error.response.data.message });
    }
}