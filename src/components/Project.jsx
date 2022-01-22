import { AiFillGithub } from "react-icons/ai";
import { BiGlobe } from "react-icons/bi";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import Image from "next/image";

const Project = ({ data }) => {
  return (
    <>
      <Flex mb={"20"} flexDir={{ base: "column", md: "row" }} gap={"20"}>
        <Stack flex={"1"}>
          <Heading
            bgGradient="linear(to-l, cyan.100, cyan.900)"
            bgClip="text"
            fontWeight={"bold"}
            pb={"5"}
          >
            {data.title}
          </Heading>
          <Text>{data.desc}</Text>

          <HStack pt={"5"} textUnderlineOffset={"3px"} spacing={"7"}>
            <Link
              variant={"link"}
              display={"flex"}
              textDecor={"underline"}
              alignItems={"center"}
              href={data.githubLink}
              isExternal
            >
              <Icon
                color={"whiteAlpha.600"}
                boxSize={"6"}
                as={AiFillGithub}
                mr={"3"}
              />
              Github
            </Link>
            <Link
              variant={"link"}
              display={"flex"}
              textDecor={"underline"}
              alignItems={"center"}
              isExternal
              href={data.websiteLink}
            >
              <Icon
                color={"whiteAlpha.600"}
                boxSize={"6"}
                mr={"3"}
                as={BiGlobe}
              />
              Website
            </Link>
          </HStack>
        </Stack>

        <Box
          flex={{ md: "1" }}
          pos={"relative"}
          bgGradient={"linear(cyan.900, black)"}
          height={{ base: "15rem", md: "25rem" }}
          overflow={"hidden"}
        >
          <Box
            width="56.25rem"
            height={"31.6rem"}
            pos={"absolute"}
            top={"10"}
            left={"10"}
            boxShadow={"2xl"}
            bgColor={"white"}
          >
            <Image
              src={data.image}
              alt={data.title}
              objectFit={"cover"}
              layout="fill"
            />
          </Box>
        </Box>
      </Flex>
    </>
  );
};

export default Project;
