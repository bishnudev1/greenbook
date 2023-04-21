import React from 'react';
import { Box, Text, VStack, Stack, HStack } from '@chakra-ui/react';
import { SiLinkedin, SiFacebook, SiInstagram } from 'react-icons/si';

const Footer = () => {
    return (
        <Box bgColor={'blackAlpha.500'} p={["4", "16"]}>
            <Stack justifyContent={["center", "space-evenly"]} alignItems={"center"} direction={["column-reverse", "row"]}>
                <VStack spacing={"4"} alignItems={["center", "flex-start"]}>
                    <Text textAlign={["center","left"]} fontSize={'lg'} fontFamily={'mono'}>Copyrighted by &copy;Greenbook. All rights reserved.</Text>
                    <Text textAlign={["center","left"]} fontSize={"md"}>Oral Health Council. Other trademarks are property of their respective owners.
</Text>
                </VStack>
                <HStack spacing={"6"} fontSize={"2xl"}>
                    <SiFacebook />
                    <SiLinkedin />
                    <SiInstagram />
                </HStack>
            </Stack>
        </Box>
    )
}

export default Footer