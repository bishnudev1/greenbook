import React, { useEffect, useState } from 'react';
import { Button, Box, Stack, VStack, HStack, Text, Heading, Image } from '@chakra-ui/react';
import { useSelector, useDispatch } from 'react-redux';
import { orderPlant } from '../../redux/actions/orderAction';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GrAdd, GrSubtract } from 'react-icons/gr';

const OrderPlant = () => {

  const { loading, error, message } = useSelector(state => state.order);

  const dispatch = useDispatch();

  const [plant, setPlant] = useState(1);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: toast.POSITION.TOP_CENTER,
        autoClose: 2000,
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
        position: toast.POSITION.TOP_RIGHT,
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      dispatch({ type: "clearMessage" });
    }
  }, [dispatch, error, message])


  const orderRiseHandler = e => {
    setPlant(plant + 1);
  }

  const orderDownHandler = e => {
    if (plant > 1) {
      setPlant(plant - 1);
    }
  }

  const orderPlantHandler = async (e) => {
    e.preventDefault();
    dispatch(orderPlant(plant, 10.99));
  }

  return (
    <Box bg={'#f7f7f7'} p={["4", "20"]} minH={"90vh"}>
      <Stack color={'blackAlpha.700'} justifyContent={["center"]} direction={["column", "row"]} spacing={"5"}>
        <Image height={"sm"} width={"sm"} objectFit={'contain'} src={'https://www.kindpng.com/picc/m/55-553143_transparent-plant-cartoon-png-transparent-cartoon-plant-png.png'} />
        <VStack alignItems={["center", "flex-start"]} spacing={["4", "6"]}>
          <Heading>Small Plant</Heading>
          <Text fontSize={"lg"} fontFamily={"revert"}>Two pieces small sized fresh Albizia Lebbeck</Text>
          <Text fontSize={"xl"}>${`${(plant * 10.98).toFixed(2)}`}</Text>
          <HStack alignItems={"center"} justifyContent={"flex-start"} spacing={"4"}>
            <Button onClick={orderDownHandler} variant={'link'}><GrSubtract /></Button>
            <Text>{plant}</Text>
            <Button onClick={orderRiseHandler} variant={'link'}><GrAdd /></Button>
          </HStack>
          <Button isLoading={loading} onClick={orderPlantHandler} variant={'solid'} size={'lg'} colorScheme='green'>Donate Now</Button>
        </VStack>
      </Stack>
    </Box>
  )
}

export default OrderPlant