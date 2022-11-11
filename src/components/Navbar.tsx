import { IoLogoAppleAr } from "react-icons/io5";
import { RiCodeSLine } from "react-icons/ri";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import Image from "next/image";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import Logo from "@/images/logo.png";
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
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";

const MobileMenu = ({ items }: any) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  return (
    <>
      <Box display={{ md: "none" }} cursor={"pointer"}>
        {isOpen === false ? (
          <HamburgerIcon boxSize={"8"} onClick={onOpen} />
        ) : (
          <CloseIcon boxSize={"6"} />
        )}

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
                {items.map((item: any) => (
                  <Link key={item.id} href={item.link} passHref>
                    <>
                      <HStack
                        alignItems={"center"}
                        fontSize={"lg"}
                        spacing={"7"}
                        _hover={{ textDecoration: "none" }}
                      >
                        <Box display={"flex"} alignItems={"center"}>
                          <Icon as={item.icon} boxSize={"5"} />
                        </Box>
                        <Text>{item.title}</Text>
                      </HStack>
                      <Divider variant={"dashed"} color={"whiteAlpha.200"} />
                    </>
                  </Link>
                ))}
              </Stack>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </Box>
    </>
  );
};

const DesktopMenu = ({ items }: any) => {
  return (
    <>
      <Stack
        display={{ base: "none", md: "flex" }}
        direction={"row"}
        as={"nav"}
        fontWeight={"semibold"}
        fontSize={"large"}
      >
        {items.map((item: any) => (
          <Link key={item.id} href={item.link || null} passHref>
            <Stack
              direction={"row"}
              px={"5"}
              display={"flex"}
              alignItems={"center"}
              _hover={{ textUnderlineOffset: "3px" }}
            >
              <Icon as={item.icon} boxSize={item.size} />
              <Text pl={"1"}>{item.title}</Text>
            </Stack>
          </Link>
        ))}
      </Stack>
    </>
  );
};

const MotionBox = motion(Box);

export const Navbar = () => {
  const navItems = [
    {
      id: 1,
      title: "Projects",
      icon: IoLogoAppleAr,
      size: "6",
      link: "#projects",
    },
    {
      id: 2,
      title: "Technologies",
      icon: RiCodeSLine,
      size: "8",
      link: "#technologies",
    },
  ];

  const [navbar, setNavbar] = useState(false);

  const scrollBehavior = () => {
    if (window.scrollY > 0) {
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
    <>
      <Box
        as={"header"}
        px={{ base: "5", md: "20", lg: "20" }}
        py={"5"}
        pos={navbar ? "fixed" : "absolute"}
        top={0}
        zIndex={"2"}
        width={"full"}
        transition={"all 0.2s ease-in 0s "}
        bgColor={"transparent"}
        backdropFilter={navbar ? "saturate(180%) blur(6px)" : null}
        borderBottom={navbar ? "1px" : null}
        borderColor={"whiteAlpha.200"}
      >
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Link href="/" passHref>
            <MotionBox
              pos={"relative"}
              boxSize={{ base: "20", md: "24" }}
              whileHover={{ scale: 1.2, rotate: 360, duration: 5 }}
              whileTap={{ rotate: 360 }}
            >
              <Image src={Logo} alt="Junel Sacro" layout={"fill"} />
            </MotionBox>
          </Link>
          <DesktopMenu items={navItems} />
          <MobileMenu items={navItems} />
        </Flex>
      </Box>
    </>
  );
};
