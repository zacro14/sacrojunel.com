import { FooterGradient } from "./gradient";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import { FaPizzaSlice } from "react-icons/fa";
import { BsRainbow } from "react-icons/bs";
import {
  Box,
  Divider,
  Flex,
  GridItem,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

const Footer = () => {
  const link = [
    {
      id: 1,
      textLink: "facebook",
      linkto: "https://www.facebook.com/junel.sacro",
      icon: FaFacebook,
    },
    {
      id: 2,
      textLink: "linkedIn",
      linkto: "https://www.linkedin.com/in/sacrojunel/",
      icon: FaLinkedin,
    },
    {
      id: 3,
      textLink: "github",
      linkto: "https://www.linkedin.com/in/sacrojunel/",
      icon: FaGithub,
    },
  ];

  return (
    <>
      <FooterGradient />
      <Divider borderColor={"whiteAlpha.300"} mt={"10"} />
      <Box m={{ base: "5", md: "20" }} textAlign={"center"} as={"footer"}>
        <Flex
          gap={{ base: "20", md: "10" }}
          flexDir={{ base: "column", md: "row" }}
          h={"full"}
          textAlign={"start"}
        >
          <GridItem display={"flex"} flexDir={"column"} flex={"1"}>
            <Heading pb={"4"}>Junel Sacro</Heading>
            <Text fontSize={"large"}>
              A{" "}
              <Text
                as={"span"}
                fontSize={"x-large"}
                fontWeight={"bold"}
                bgGradient={"linear(to-r, purple.400, pink.200)"}
                bgClip={"text"}
              >
                Front End Web Developer
              </Text>{" "}
              aims to make websites wonderful{" "}
              <Icon color={"pink.300"} as={BsRainbow} /> and enjoyable{" "}
              <Icon color={"yellow.500"} as={FaPizzaSlice} />.
            </Text>
          </GridItem>
          <Box display={"flex"} flexDir={"column"} flex={"1"}>
            <Heading pb={"4"}>Contact</Heading>
            <Stack
              alignItems={"center"}
              h={"14"}
              direction={"row"}
              spacing={{ base: "5", md: "10" }}
            >
              {link.map((item) => (
                <Link
                  key={item.id}
                  href={item.linkto}
                  isExternal
                  display={"flex"}
                  alignItems={"center"}
                  fontSize={"large"}
                  fontWeight={"semibold"}
                  _hover={{ textDecoration: "none" }}
                >
                  <Icon as={item.icon} boxSize={"6"} color={"cyan.300"} />
                  <Text
                    textDecor={"underline"}
                    textUnderlineOffset={"3px"}
                    textTransform={"capitalize"}
                    pl={"2"}
                  >
                    {item.textLink}
                  </Text>
                </Link>
              ))}
            </Stack>
          </Box>
        </Flex>
        <Text py={"10"}>Junel Sacro &copy; 2022</Text>
      </Box>
    </>
  );
};

export default Footer;
