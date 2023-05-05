import React, { useState, useEffect } from 'react'
import { Box, Button, VStack, Input, FormLabel, Avatar } from '@chakra-ui/react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { updateProfilePicture } from '../../redux/actions/profileAction';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
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

const UpdateProfilePicture = () => {


    const fileUploaderStyle = {
        "&::file-selector-button": fileUploadCss
    };

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

    const { loading, message, error } = useSelector(state => state.profile);

    useEffect(() => {
        if (error) {
            toast.error(error, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            dispatch({ type: "clearError" })
        }
        if (message) {
            toast.success(message, {
                position: toast.POSITION.TOP_CENTER,
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            dispatch({ type: "clearMessage" });
            navigate('/');
        }
    }, [dispatch, error, message])

    const submitHandler = e => {
        e.preventDefault();

        const myForm = new FormData();
        myForm.append('file', image);

        dispatch(updateProfilePicture(myForm));
    }


    return (
        <Box color={'black'} bgColor={'green.700'} minH={"90vh"} p={["4", '20']}>
            <VStack color={'white'} px={["2", "60"]} justifyContent={"center"} mt={["20", "10"]} spacing={'5'}>
                <Avatar src={imagePrev} size={'xl'} />
                <VStack width={"100%"} alignItems={["flex-start"]} spacing={'3'}>
                    <FormLabel textAlign={["left"]}>New Profile Image</FormLabel>
                    <Input onChange={imageHandler} css={fileUploaderStyle} required accept='image/*' type='file' />
                </VStack>
                <Button isLoading={loading} onClick={submitHandler} variant={'ghost'} size={'md'} colorScheme='white'>Change</Button>
            </VStack>
        </Box>
    )
}

export default UpdateProfilePicture