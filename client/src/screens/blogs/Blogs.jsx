import React, { useEffect } from 'react';
import { Box, Heading, Button, VStack, Text, HStack } from '@chakra-ui/react';
import { Link, useNavigate } from 'react-router-dom';
import { deleteBlog, loadBlogs } from '../../redux/actions/blogAction';
import { useDispatch, useSelector } from 'react-redux';
import toast from 'react-hot-toast';


const Blogs = () => {

    const { blogs, error, message, loading } = useSelector(state => state.blog);
    const { user } = useSelector(state => state.user);
    const dispatch = useDispatch();

    const navigate = useNavigate();

    const currentUser = user ? user : null;

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

    const deleteBlogHandler = (id) => {
        dispatch(deleteBlog(id));
        setTimeout(() => {
            navigate('/create-an-article')
        }, 1000);
    }

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
                                {
                                    currentUser === null ? null : item.user === currentUser.user._id ? <Button
                                        onClick={() => deleteBlogHandler(item._id)}
                                        size={'lg'} variant={'link'} color={'red'}>Delete</Button> : null
                                }
                            </HStack>
                        </VStack>
                    })
                }
            </VStack>
        </Box>
    )
}

export default Blogs