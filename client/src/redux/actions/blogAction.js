import { backendUrl } from "../store";
import axios from "axios";


export const loadBlogs = () => async (dispatch) => {
    try {
        dispatch({ type: "loadBlogsRequest" });
        const { data } = await axios.get(`${backendUrl}/blogs`, {
            withCredentials: true,
        });
        dispatch({ type: "loadBlogsSuccess", payload: data.blogs });

    } catch (error) {
        dispatch({ type: "loadBlogsFailed", payload: error.response.data.message });
    }
}

export const deleteBlog = (id) => async (dispatch) => {
    try {
        dispatch({ type: "deleteBlogRequest" });
        const { data } = await axios.delete(`${backendUrl}/delete-blog/${id}`, {
            withCredentials: true,
        });
        dispatch({ type: "deleteBlogSuccess", payload: data });

    } catch (error) {
        dispatch({ type: "deleteBlogFailed", payload: error.response.data.message });
    }
}

export const createBlog = (formdata) => async (dispatch) => {
    try {
        dispatch({ type: "createBlogRequest" });
        const { data } = await axios.post(`${backendUrl}/create-blog`, formdata, {
            headers: {
                "Content-Type": "multipart/form-data",
            },
            withCredentials: true,
        });
        dispatch({ type: "createBlogSuccess", payload: data });

    } catch (error) {
        dispatch({ type: "createBlogFailed", payload: error.response.data.message });
    }
}