import React from 'react'
import { Box, Heading, Text, Button, VStack, Image, Stack } from '@chakra-ui/react';
import FounderImg from '../../assets/images/founder.jpg';
import { SiLinkedin } from 'react-icons/si';

const Founder = () => {
  return (
    <Box p={["4", "16"]} bgColor={'white'}>
    <Heading textAlign={"center"} color={'green.600'} size={'2xl'} children='Founder' />
    <Stack mt={["0", "20"]} justifyContent={["center", "space-evenly"]} alignItems={"center"} direction={["column", "row"]}>
        <Image src={FounderImg} boxSize={"sm"} objectFit={'contain'} />
        <VStack
        color={'blackAlpha.800'}
            w={["100%", "md"]}
            spacing={"6"}
            alignItems={["center", "flex-start"]}
        >
            <Heading textAlign={["center", "left"]} size={"lg"} fontFamily={"body"}>Bishnudev Khutia</Heading>
            <Text fontFamily={"mono"} fontSize={"xl"} textAlign={["center", "left"]}>He's a passionate <b style={{"color":"green"}}>Traveller</b> and professional <b style={{"color":"green"}}>Software Engineer</b> from India. While travelling in different places he noticed the world is loosing it's beauty because of we human beings. So he decided to change the Nature again by restoring it. From there he discovered <b style={{"color":"green"}}>Greenbook</b>.</Text>
            <Button colorScheme='green' variant={'solid'}><span style={{ "marginRight": "5px" }}>Connect Him</span><SiLinkedin color='blue'/></Button>
        </VStack>
    </Stack>
</Box>
  )
}

export default Founder