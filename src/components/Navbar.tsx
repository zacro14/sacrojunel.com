import { IoLogoAppleAr } from "react-icons/io5";
import { RiCodeSLine } from "react-icons/ri";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import Logo from "@/images/logo.png";
import NextLink from "next/link";
import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Flex,
  HStack,
  Icon,
  Stack,
  Text,
  useDisclosure,
  Link,
  Center,
  useBreakpointValue,
} from "@chakra-ui/react";

const navItems = [
  {
    id: 1,
    title: "Projects",
    icon: IoLogoAppleAr,
    size: "4",
    link: "#projects",
  },
  {
    id: 2,
    title: "Technologies",
    icon: RiCodeSLine,
    size: "5",
    link: "#technologies",
  },
];

const MobileMenu = ({ items }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const breakpoint = useBreakpointValue({ base: true, md: false });

  useEffect(() => {
    if (isOpen && !breakpoint) {
      onClose();
    }
  }, [breakpoint, isOpen, onClose]);
  return (
    <>
      <Center
        display={{ base: "flex", md: "none" }}
        boxSize={"10"}
        as="button"
        type="button"
        onClick={onOpen}
      >
        {isOpen ? <CloseIcon boxSize={"6"} /> : <HamburgerIcon boxSize={"8"} />}
      </Center>
      <Drawer isOpen={isOpen} placement="bottom" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent
          bgColor={"gray.800"}
          display={{ base: "block", md: "none" }}
          roundedTop={"lg"}
        >
          <DrawerBody as={"nav"} py={"5"}>
            <Stack>
              {items.map((item: any) => (
                <Link key={item.id} href={item.link} p={"5"} rounded={"lg"}>
                  <HStack
                    alignItems={"center"}
                    fontSize={"lg"}
                    spacing={"7"}
                    _hover={{ textDecoration: "none" }}
                  >
                    <Box display={"flex"} alignItems={"center"}>
                      <Icon
                        as={item.icon}
                        textColor={"teal.400"}
                        boxSize={"5"}
                      />
                    </Box>
                    <Text>{item.title}</Text>
                  </HStack>
                </Link>
              ))}
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

const DesktopMenu = ({ items }: any) => {
  return (
    <Stack
      display={{ base: "none", md: "flex" }}
      direction={"row"}
      as={"nav"}
      fontWeight={"semibold"}
      fontSize={"large"}
    >
      {items.map((item: any) => (
        <Link
          key={item.id}
          href={item.link || null}
          textDecoration={"none"}
          rounded={"lg"}
          p={"3"}
          _hover={{ textDecor: "none" }}
        >
          <Stack
            direction={"row"}
            px={"5"}
            display={"flex"}
            alignItems={"center"}
            _hover={{ textUnderlineOffset: "3px" }}
          >
            <Icon as={item.icon} textColor={"teal.400"} boxSize={item.size} />
            <Text pl={"1"} _hover={{ color: "teal.400" }} fontSize={"lg"}>
              {item.title}
            </Text>
          </Stack>
        </Link>
      ))}
    </Stack>
  );
};

const MotionBox = motion(Box);

export const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const scrollBehavior = () => {
    if (window.scrollY >= 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollBehavior);

    return () => {
      window.removeEventListener("scroll", scrollBehavior);
    };
  }, []);

  return (
    <Box
      as={"header"}
      py={"5"}
      pos={"fixed"}
      top={0}
      left={0}
      zIndex={"2"}
      w="full"
      paddingX={"6"}
      transition={"all 0.2s ease-in 0s "}
      bgColor={"transparent"}
      backdropFilter={navbar ? "saturate(180%) blur(6px)" : undefined}
      borderBottom={navbar ? "1px" : undefined}
      borderColor={"whiteAlpha.200"}
    >
      <Flex
        alignItems={"center"}
        justifyContent={"space-between"}
        marginX={"auto"}
        maxW={"6xl"}
      >
        <NextLink href="/">
          <Link>
            <MotionBox
              pos={"relative"}
              boxSize={{ base: "20", md: "24" }}
              whileHover={{ scale: 1.2, rotate: 360, duration: 5 }}
              whileTap={{ rotate: 360 }}
            >
              <Image src={Logo} alt="Junel Sacro" layout={"fill"} />
            </MotionBox>
          </Link>
        </NextLink>
        <DesktopMenu items={navItems} />
        <MobileMenu items={navItems} />
      </Flex>
    </Box>
  );
};
