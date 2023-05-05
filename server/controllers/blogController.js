import { Blog } from "../model/blog.js";
import getDataUri from "../utils/dataUri.js";
import cloudinary from 'cloudinary';
import admin from 'firebase-admin';

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

export const deleteBlog = async (req, res) => {
    try {
        const { id } = req.params;

        const deletedBlog = await Blog.findByIdAndDelete({ _id: id });
        if (!deletedBlog) {
            res.status(500).json({
                success: false,
                message: "Internal server error. Try again."
            });
        }
        res.status(200).json({
            success: true,
            message: "Your article has been deleted successfully"
        });

    } catch (error) {
        res.status(400).json({
            success: false,
            error: error
        });
    }

}

export const createBlog = async (req, res) => {
    try {

        const bucket = admin.storage().bucket();
        const { title, desc, createdBy } = req.body;

        if (!title || !desc || !createdBy) return res.status(422).json({
            success: false,
            message: 'Fill all the details'
        });

        const file = req.file;

        if (!file) return res.status(422).json({
            success: false,
            message: 'Please upload any article image'
        });

        const blob = bucket.file(file.originalname);

        const blobStream = blob.createWriteStream();

        blobStream.on('error', (err) => {
            res.status(500).json({
                success: false,
                message: err
            });
        });

        blobStream.on('finish', async () => {
            try {

                const publicUrl = `https://firebasestorage.googleapis.com/v0/b/${bucket.name}/o/${blob.name}?alt=media`;

                await Blog.create({
                    title,
                    desc,
                    createdBy,
                    image: {
                        url: publicUrl
                    },
                    user: req.user._id
                });
                res.status(200).json({
                    success: true,
                    message: "Your article has been submitted. Thanks."
                });
            } catch (error) {
                res.status(500).json({
                    success: false,
                    message: error
                });
            }
        });
        blobStream.write(file.buffer);
        blobStream.end();
    } catch (error) {
        console.log(error);
    }
}

