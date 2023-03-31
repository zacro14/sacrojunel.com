import React from "react";
import { items } from "@/data/tecnologies";
import { IIcon, Technology } from "src/interface/technology.interface";
import {
  Box,
  Center,
  Heading,
  Icon,
  Link,
  SimpleGrid,
  Stack,
  Text,
  Tooltip,
} from "@chakra-ui/react";

const ItemCard = ({ ...item }: Technology) => {
  return (
    <Box
      flex={"1"}
      borderColor={"whiteAlpha.200"}
      bgColor={"whiteAlpha.200"}
      p={"5"}
      rounded={"2xl"}
    >
      <Heading as={"h3"} fontSize={"large"} pb={"5"} textAlign={"center"}>
        {item.title}
      </Heading>

      <Stack
        direction={"row"}
        alignItems={"center"}
        justifyContent={"center"}
        flexWrap={"wrap"}
        gap={"5"}
      >
        {item.icon.map((icon: IIcon, index: number) => (
          <Tooltip key={index} label={icon.name}>
            <Center
              boxSize={"24"}
              as={Link}
              bgGradient={"linear(to-t, gray.300, gray.200)"}
              rounded={"2xl"}
              padding={"5"}
              isExternal
              href={icon.link}
            >
              <Icon as={icon.icon} boxSize={"10"} color={icon.color} />
            </Center>
          </Tooltip>
        ))}
      </Stack>
    </Box>
  );
};

const TechnologiesSection = () => {
  return (
    <>
      <Box my={"5"} pt={"10"} as={"section"} id={"technologies"}>
        <Heading mb={"5"} fontSize={{ base: "4xl", md: "5xl" }}>
          Technologies
        </Heading>
        <Text>
          In my Journey as a <Text as={"b"}>Front End Web Developer</Text>, so
          far this are the technologies that I used.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={"10"} mt={"16"}>
          {items.map((item, index) => (
            <ItemCard key={index} {...item} />
          ))}
        </SimpleGrid>
      </Box>
    </>
  );
};

export default TechnologiesSection;
