import { FooterGradient } from "./gradient";
import { FaFacebook, FaLinkedin, FaGithub } from "react-icons/fa";
import {
  Box,
  Divider,
  Grid,
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
      <Box p={"20"} textAlign={"center"} as={"footer"}>
        <Grid
          gap={"10"}
          gridTemplateColumns={"repeat(2, 1fr)"}
          h={"full"}
          textAlign={"start"}
        >
          <GridItem display={"flex"} flexDir={"column"}>
            <Heading pb={"4"}>Junel Sacro</Heading>
            <Text fontSize={"large"}>
              a front end web developer aiming to make website to{" "}
            </Text>
          </GridItem>
          <GridItem display={"flex"} flexDir={"column"}>
            <Heading pb={"4"}>Contact</Heading>
            <Stack
              direction={"row"}
              spacing={"10"}
              alignItems={"center"}
              h={"14"}
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
                  <Icon as={item.icon} boxSize={"8"} color={"cyan.300"} />
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
          </GridItem>
          Junel Sacro &copy; 2022
        </Grid>
      </Box>
    </>
  );
};

export default Footer;
