import React, { useEffect } from 'react';
import { Box, Heading, Button, VStack, Text, HStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { loadBlogs } from '../../redux/actions/blogAction';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';


const Blogs = () => {

    const { blogs, error, message, loading } = useSelector(state => state.blog);
    const dispatch = useDispatch();


    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: "clearError" })
        }
        if (message) {
            toast.success(message);
            dispatch({ type: "clearMessage" })
        }
    }, [dispatch, loading, error, message])

    useEffect(() => {
        dispatch(loadBlogs());
    }, [])

    return (
        <Box bgColor={'green.300'} py={["4", "16"]} px={["4", "56"]} minH={"100vh"}>
            <VStack spacing={"6"} alignItems={["center", "flex-start"]}>
                {
                    blogs.map((item, index) => {
                        return <VStack key={index} p={["3", "4"]} borderRadius={"xl"} bgColor={'whiteAlpha.600'} w={"100%"} spacing={"4"} alignItems={"flex-start"}>
                            <Heading color={'green'} size={["lg", "xl"]}>{item.title}</Heading>
                            <Text fontFamily={"inherit"} fontWeight={"bold"} color={'green.800'} fontSize={["lg", "xl"]} textAlign={"left"}>{item.desc}</Text>
                            <HStack alignItems={"center"} justifyContent={"space-evenly"}>
                                <Text textAlign={["center", "left"]} color={'green.600'} fontFamily={"inherit"}>- {item.createdBy}</Text>
                            </HStack>
                            <HStack spacing={"4"}>
                                <Link to={`blog/${item._id}`} state={item} ><Button variant={'link'} color={'green'} size={'lg'}>Read Now</Button></Link>
                            </HStack>
                        </VStack>
                    })
                }
            </VStack>
        </Box>
    )
}

export default Blogs


//deleteBlogHandler(item._id)