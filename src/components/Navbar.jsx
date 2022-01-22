import { IoLogoAppleAr } from "react-icons/io5";
import { RiCodeSLine } from "react-icons/ri";
import { HamburgerIcon } from "@chakra-ui/icons";
import Logo from "../../public/logo/Logo-junelsacro.png";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Box,
  Divider,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useRef } from "react";

const MobileMenu = ({ items }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <Box display={{ md: "none" }} cursor={"pointer"}>
        <HamburgerIcon boxSize={"10"} onClick={onOpen} />
        <Drawer
          isOpen={isOpen}
          placement="bottom"
          onClose={onClose}
          finalFocusRef={btnRef}
          size={"sm"}
        >
          <DrawerOverlay />
          <DrawerContent
            bgColor={"gray.800"}
            roundedTop={"lg"}
            display={{ base: "block", md: "none", lg: "none" }}
          >
            <DrawerBody py={"10"} as={"nav"}>
              <Stack>
                {items.map((item) => (
                  <>
                    <HStack
                      key={item.id}
                      alignItems={"center"}
                      fontSize={"lg"}
                      as={Link}
                      spacing={"7"}
                    >
                      <Box>
                        <Icon as={item.icon} boxSize={"5"} />
                      </Box>
                      <Text>{item.title}</Text>
                    </HStack>
                    <Divider variant={"dashed"} color={"whiteAlpha.200"} />
                  </>
                ))}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};

const DesktopMenu = ({ items }) => {
  return (
    <>
      <Stack
        display={{ base: "none", md: "flex" }}
        direction={"row"}
        as={"nav"}
        fontWeight={"semibold"}
        fontSize={"large"}
      >
        {items.map((item) => (
          <Link key={item.id} px={"5"} display={"flex"} alignItems={"center"}>
            <Icon as={item.icon} boxSize={item.size} />
            <Text pl={"1"}>{item.title}</Text>
          </Link>
        ))}
      </Stack>
    </>
  );
};

const MotionBox = motion(Box);

const Navbar = () => {
  const navItems = [
    {
      id: 1,
      title: "Projects",
      icon: IoLogoAppleAr,
      size: "6",
    },
    {
      id: 2,
      title: "Technologies",
      icon: RiCodeSLine,
      size: "8",
    },
  ];
  return (
    <>
      <Box as={"header"} px={{ base: "5", md: "20", lg: "20" }} py={"5"}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Link href="/">
            <MotionBox
              pos={"relative"}
              boxSize={{ base: "20", md: "24" }}
              whileHover={{ scale: 1.2, rotate: 360, duration: 5 }}
              whileTap={{ rotate: 360 }}
            >
              <Image src={Logo} alt="logo" layout={"fill"} />
            </MotionBox>
          </Link>
          <DesktopMenu items={navItems} />
          <MobileMenu items={navItems} />
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
