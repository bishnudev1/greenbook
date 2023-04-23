import { Blog } from "../model/blog.js";
import getDataUri from "../utils/dataUri.js";
import cloudinary from 'cloudinary';

export const getAllBlogs = async (req, res) => {
    try {
        const blogs = await Blog.find();

        res.status(200).json({
            success: true,
            blogs: blogs
        });
    } catch (error) {
        console.log(error);
    }
}

export const getBlog = async (req, res) => {
    try {
        const { id } = req.params;

        const blog = await Blog.findById({ _id: id });

        if (!blog) return res.status(500).json({
            success: true,
            message: "Something went wrong !"
        });

        res.status(200).json({
            success: true,
            blog: blog
        });
    } catch (error) {
        console.log(error);
    }
}

export const createBlog = async (req, res) => {
    try {
        const { title, desc, createdBy } = req.body;

        if (!title || !desc || !createdBy) return res.status(422).json({
            success: false,
            message: 'Fill all the details'
        });

        const file = req.file;

        const fileUri = getDataUri(file);

        const myCloud = await cloudinary.v2.uploader.upload(fileUri.content);

        await Blog.create({
            title,
            desc,
            createdBy,
            image: {
                public_id: myCloud.public_id,
                url: myCloud.secure_url
            }
        });

        res.status(200).json({
            success: true,
            message: "Your blog has been submitted. Thanks."
        });
    } catch (error) {
        console.log(error);
    }
}

