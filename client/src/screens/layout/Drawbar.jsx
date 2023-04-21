import { useState } from "react";
import {
  Flex,
  IconButton,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  VStack,
  Link,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";

const Drawbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isMobile, setIsMobile] = useState(false);

  // set isMobile state to true if screen width is less than 768px
  const handleResize = () => {
    setIsMobile(window.innerWidth < 768);
  };
  window.addEventListener("resize", handleResize);

  return (
    <>
      {/* Navbar for desktop */}
      <Flex as="nav" bg="gray.200" p={4} alignItems="center" justifyContent="space-between">
        <Link href="#">Home</Link>
        <VStack spacing={4} direction="row">
          <Link href="#">About</Link>
          <Link href="#">Contact</Link>
        </VStack>
      </Flex>

      {/* Navbar for mobile */}
      <Flex as="nav" bg="gray.200" p={4} alignItems="center" justifyContent="space-between">
        <IconButton
          aria-label="Open menu"
          icon={<HamburgerIcon />}
          onClick={onOpen}
          display={isMobile ? "block" : "none"}
        />
        <Link href="#">Home</Link>
      </Flex>

      {/* Drawer for mobile */}
      <Drawer isOpen={isOpen} placement="left" onClose={onClose}>
        <DrawerOverlay>
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Menu</DrawerHeader>
            <DrawerBody>
              <VStack spacing={4} direction="column">
                <Link href="#" onClick={onClose}>
                  Home
                </Link>
                <Link href="#" onClick={onClose}>
                  About
                </Link>
                <Link href="#" onClick={onClose}>
                  Contact
                </Link>
              </VStack>
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  );
};

export default Drawbar;
