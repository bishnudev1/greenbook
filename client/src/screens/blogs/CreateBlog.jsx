import React, { useState, useEffect } from 'react'
import { Box, Heading, Button, VStack, Input, FormLabel } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { createBlog } from '../../redux/actions/blogAction';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';


export const fileUploadCss = {
    cursor: "pointer",
    marginLeft: "-5%",
    width: "110%",
    border: "none",
    height: "100%",
    color: "blue",
    backgroundColor: "white"
};

const CreateBlog = () => {

    const fileUploaderStyle = {
        "&::file-selector-button": fileUploadCss
    };

    const { loading, error, message } = useSelector(state => state.blog);

    const [title, setTitle] = useState('');
    const [desc, setDesc] = useState('');
    const [createdBy, setCreatedBy] = useState('');
    const [image, setImage] = useState('');
    const [imagePrev, setImagePrev] = useState('');

    const dispatch = useDispatch();
    const navigate = useNavigate();


    const imageHandler = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);

        reader.onloadend = () => {
            setImagePrev(reader.result);
            setImage(file);
        }

    }

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: "clearError" })
        }
        if (message) {
            toast.success(message);
            navigate('/greenblogs');
            dispatch({ type: "clearMessage" });
        }
    }, [dispatch, error, message]);


    const submitHandler = e => {
        e.preventDefault();

        const myForm = new FormData();

        myForm.append('title', title);
        myForm.append('desc', desc);
        myForm.append('createdBy', createdBy);
        myForm.append('file', image);

        dispatch(createBlog(myForm));
    }

    return (
        <Box color={'black'} bgColor={'green.700'} minH={"90vh"} p={["4", '20']}>
            <Heading color={'white'} textAlign={"center"} size={'2xl'} children='Write a nature article...' />
            <VStack color={'white'} px={["2", "60"]} justifyContent={"center"} mt={["20", "10"]} spacing={'5'}>
                <VStack width={"100%"} alignItems={["flex-start"]} spacing={'3'}>
                    <FormLabel textAlign={["left"]}>Title</FormLabel>
                    <Input value={title} onChange={(e) => setTitle(e.target.value)} width={'100%'} type='text' placeholder='Blog 1' />
                </VStack>
                <VStack width={"100%"} alignItems={["flex-start"]} spacing={'3'}>
                    <FormLabel textAlign={["left"]}>Description</FormLabel>
                    <Input value={desc} onChange={(e) => setDesc(e.target.value)} type='email' placeholder='This is an amazing blog...' />
                </VStack>
                <VStack width={"100%"} alignItems={["flex-start"]} spacing={'3'}>
                    <FormLabel textAlign={["left"]}>Creator</FormLabel>
                    <Input value={createdBy} onChange={(e) => setCreatedBy(e.target.value)} type='text' placeholder='Bishnudev Khutia' />
                </VStack>
                <VStack width={"100%"} alignItems={["flex-start"]} spacing={'3'}>
                    <FormLabel textAlign={["left"]}>Article Image</FormLabel>
                    <Input onChange={imageHandler} css={fileUploaderStyle} required accept='image/*' type='file' />
                </VStack>
                <Button isLoading={loading} onClick={submitHandler} variant={'outline'} size={'md'} colorScheme='white'>Submit</Button>
            </VStack>
        </Box>
    )
}

export default CreateBlog