import { AiFillGithub } from "react-icons/ai";
import { BiGlobe } from "react-icons/bi";
import Image from "next/image";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import { IProject } from "src/interface/projects.interface";

const Project = (data: IProject) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <Flex mb={"20"} flexDir={{ base: "column", md: "row" }} gap={"20"}>
        <Stack flex={"1"}>
          <Heading
            as={"h3"}
            bgGradient="linear(to-l, cyan.100, cyan.900)"
            bgClip="text"
            fontWeight={"bold"}
            pb={"5"}
          >
            {data.title}
          </Heading>
          <Text>{data.desc}</Text>

          <HStack pt={"6"} flexWrap={"wrap"} gap={"2"} spacing={"unset"}>
            {data.technology?.map((tech: any, index: number) => (
              <Tag
                key={index}
                rounded={"full"}
                bgColor={"whiteAlpha.300"}
                color={"gray.100"}
                p={"2"}
              >
                {tech.tech}
              </Tag>
            ))}
          </HStack>

          <HStack pt={"8"} textUnderlineOffset={"3px"} spacing={"7"}>
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
          bgGradient={"linear(to-r, teal.200, pink.200)"}
          height={{ base: "80", md: "25rem" }}
          overflow={"hidden"}
          borderRadius={"lg"}
        >
          <Box
            width={{ base: "full", md: "34.25rem", lg: "full" }}
            height={{ base: "full", md: "26.6rem" }}
            pos={"absolute"}
            top={"10"}
            left={"10"}
            boxShadow={"2xl"}
            bgColor={"white"}
            rounded={"md"}
          >
            {data.image && (
              <Image
                src={data.image}
                alt={data.title ? data.title : data.image ?? "Coming Soon"}
                objectFit={"cover"}
                objectPosition={"-17%"}
                blurDataURL={data.image}
                placeholder={"blur"}
                layout="fill"
              />
            )}
          </Box>
        </Box>
      </Flex>
    </motion.div>
  );
};

export default Project;
