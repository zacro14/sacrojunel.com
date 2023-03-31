import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { IProject } from "src/interface/projects.interface";
import Nextlink from "next/link";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  HStack,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Tag,
  Text,
} from "@chakra-ui/react";

const Project = (props: IProject) => {
  const { title, desc, technology, image, links } = props;

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
            {title}
          </Heading>
          <Text fontSize={"lg"}>{desc}</Text>

          <HStack pt={"6"} flexWrap={"wrap"} gap={"2"} spacing={"unset"}>
            {technology?.map((tech, index: number) => (
              <Tag
                key={index}
                rounded={"full"}
                bgColor={"whiteAlpha.300"}
                color={"gray.100"}
                py={"2"}
                px={"4"}
              >
                {tech.tech}
              </Tag>
            ))}
          </HStack>

          <SimpleGrid
            pt={"8"}
            textDecoration={""}
            spacing={{ base: 3, md: "5", lg: "7" }}
            columns={{ base: 2, md: 2, lg: 3 }}
          >
            {links.map(({ name, icon, link }) => (
              <Nextlink key={name} href={link} passHref>
                <Link
                  variant={"link"}
                  display={"flex"}
                  alignItems={"center"}
                  p={"2"}
                  rounded={"md"}
                  isExternal
                >
                  <Icon
                    color={"whiteAlpha.600"}
                    boxSize={"6"}
                    as={icon}
                    mr={{ base: "1", md: "2", lg: "3" }}
                  />
                  {name} <ExternalLinkIcon ml={"1"} />
                </Link>
              </Nextlink>
            ))}
          </SimpleGrid>
        </Stack>

        <Box
          flex={{ md: "1" }}
          pos={"relative"}
          bg="linear-gradient(180deg, rgba(33, 33, 33, 0) 0%, rgb(8, 111, 131, 0.3) 45.31%, rgba(19, 19, 19, 0) 100%)"
          height={{ base: "80", md: "25rem" }}
          overflow={"hidden"}
          borderRadius={"lg"}
        >
          <Box
            width={{ base: "full", md: "34.25rem", lg: "full" }}
            height={{ base: "25rem", md: "30.25rem" }}
            pos={"absolute"}
            top={"10"}
            left={"10"}
            boxShadow={"2xl"}
            bgColor={"white"}
            rounded={"md"}
            overflow={"hidden"}
          >
            {image && (
              <Image
                src={image}
                alt={title ? title : image ?? "Coming Soon"}
                objectFit={"cover"}
                objectPosition={"-12%"}
                blurDataURL={image}
                placeholder={"blur"}
                layout={"fill"}
              />
            )}
          </Box>
        </Box>
      </Flex>
    </motion.div>
  );
};

export default Project;
