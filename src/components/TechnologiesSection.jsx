import { items } from "../data/tecnologies";
import {
  Box,
  Container,
  Flex,
  Heading,
  Icon,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";

const ItemCard = ({ item }) => {
  return (
    <Container
      flex={"1"}
      borderColor={"whiteAlpha.200"}
      bgColor={"whiteAlpha.200"}
      p={"5"}
      rounded={"2xl"}
    >
      <Heading
        textTransform={"capitalize"}
        fontSize={"large"}
        pb={"5"}
        textAlign={"center"}
      >
        {item.title}
      </Heading>

      {item.icon !== null ? (
        <Stack direction={"row"} spacing={"5"} justifyContent={"center"}>
          {item.icon.map((items, index) => (
            <Box
              as={Link}
              key={index}
              bgGradient={"linear(to-t, gray.300, gray.200)"}
              rounded={"2xl"}
              padding={"5"}
              isExternal
              href={items.link}
            >
              <Icon as={items.icon} boxSize={"10"} color={items.color}></Icon>
            </Box>
          ))}
        </Stack>
      ) : null}
    </Container>
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
        <Flex
          flexDirection={{ base: "column", md: "row" }}
          gap={"10"}
          mt={"16"}
        >
          {items.map((item, index) => (
            <ItemCard key={index} item={item} />
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default TechnologiesSection;
