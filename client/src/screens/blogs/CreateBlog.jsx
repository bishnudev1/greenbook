import React from 'react'
import { Box, Heading, Button, VStack, Input, FormLabel } from '@chakra-ui/react';


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

    return (
        <Box color={'black'} bgColor={'green.700'} minH={"90vh"} p={["4", '20']}>
            <Heading color={'white'} textAlign={"center"} size={'2xl'} children='Write a nature article...' />
            <VStack color={'white'} px={["2", "60"]} justifyContent={"center"} mt={["20", "10"]} spacing={'5'}>
                <VStack width={"100%"} alignItems={["flex-start"]} spacing={'3'}>
                    <FormLabel textAlign={["left"]}>Title</FormLabel>
                    <Input width={'100%'} type='text' placeholder='Blog 1' />
                </VStack>
                <VStack width={"100%"} alignItems={["flex-start"]} spacing={'3'}>
                    <FormLabel textAlign={["left"]}>Description</FormLabel>
                    <Input type='email' placeholder='This is an amazing blog...' />
                </VStack>
                <VStack width={"100%"} alignItems={["flex-start"]} spacing={'3'}>
                    <FormLabel textAlign={["left"]}>Creator</FormLabel>
                    <Input type='text' placeholder='Bishnudev Khutia' />
                </VStack>
                <VStack width={"100%"} alignItems={["flex-start"]} spacing={'3'}>
                    <FormLabel textAlign={["left"]}>Article Image</FormLabel>
                    <Input css={fileUploaderStyle} required accept='image/*' type='file' />
                </VStack>
                <Button variant={'outline'} size={'md'} colorScheme='white'>Submit</Button>
            </VStack>
        </Box>
    )
}

export default CreateBlog