import React from 'react'
import { Box, Heading, Button, VStack, Text } from '@chakra-ui/react';

const PartnerWithUs = () => {
    return (
        <Box py={["4", "12"]} px={["4", "56"]} bgColor={'green.600'}>
            <Heading textAlign={"center"} size={'2xl'} children='Partner with us' />
            <VStack mt={'10'} spacing={'8'} justifyContent={'center'} alignItems={'center'}>
                <Text px={["0","16"]} textAlign={'center'} fontFamily={'serif'} fontSize={'2xl'}>
                You can partner with us if you want to host hackathons, talks and events. Let’s help each other and grow together!
                </Text>
                <Button size={'lg'} borderRadius={'lg'} variant={'outline'} color={'white'} colorScheme='green'>bishnudev@greenbook.org</Button>
            </VStack>
        </Box>
    )
}

export default PartnerWithUs