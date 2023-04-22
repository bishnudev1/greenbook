import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Heading, VStack, Text, HStack, Image } from '@chakra-ui/react';
import { SiFacebook, SiLinkedin, SiStackoverflow } from 'react-icons/si';

const Blog = () => {

    const natureDesc = `There comes a point in our lives when we begin to downsize; in concert, we make an effort to get rid of clutter that has accumulated over the years.  Multiple trips to Goodwill ensue.  

    For those of us who predate the digital age, the clutter includes countless photos, stored behind yellowing sheets of plastic  Determined to shred most of those photos before our adult children are forced to deal with them, my wife and I began the process of going through the albums, intent on discarding the vast majority of the photographs. 
    
    During such a project, one can easily feel that they are deleting their family history and disrespecting the significance of life's events.  What should be a mundane task is complicated by all those faces, smiling back from our past.  Needless to say, we kept more photos than we had anticipated; the urge to hold onto our past is a powerful human trait.`;

    const { id } = useParams();

    return (
        <Box bgColor={'white'} minH={"100vh"} p={["4", "16"]}>
            <VStack spacing={"10"} px={["4", "8"]} alignItems={"flex-start"}>
                <Heading textAlign={"left"} color={'green'} size={"3xl"}>{`Blog ${id}`}</Heading>
                <Image objectFit={'contain'} boxSize={["unset","80"]} src='https://images.pexels.com/photos/15286/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' />
                <Text fontFamily={"inherit"} fontWeight={"bold"} color={'green.800'} fontSize={"2xl"}>{natureDesc}</Text>
                <HStack pt={["4", "6"]} spacing={["4", "8"]} justifyContent={"space-evenly"} alignItems={["center", "flex-end"]}>
                    <Text fontWeight={"bold"} color={'green.600'} fontFamily={"inherit"}>{`Published on 21/04/23`}</Text>
                    <Text fontWeight={"bold"} color={'green.600'} fontFamily={"inherit"}>{`Written by Bishnudev Khutia`}</Text>
                </HStack>
                <HStack width={["100%","unset"]} spacing={["4", "8"]} justifyContent={"space-evenly"}>
                    <a href='www.google.co.in'><SiFacebook size={'40'} color='skyblue' /></a>
                    <a href='www.google.co.in'><SiStackoverflow size={'40'} color='orange' /></a>
                    <a href='www.google.co.in'><SiLinkedin size={'40'} color='blue' /></a>
                </HStack>
            </VStack>
        </Box>
    )
}

export default Blog