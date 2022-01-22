import { items } from "../data/tecnologies";
import { Box, Container, Flex, Heading, Icon, Stack } from "@chakra-ui/react";

const ItemCard = ({ item }) => {
  return (
    <Container
      flex={"1"}
      borderColor={"whiteAlpha.200"}
      bgColor={"whiteAlpha.200"}
      p={"5"}
      rounded={"2xl"}
    >
      <Heading textTransform={"capitalize"} fontSize={"large"} pb={"5"}>
        {item.title}
      </Heading>

      {item.icon !== null ? (
        <Stack direction={"row"} spacing={"5"}>
          {item.icon.map((items, index) => (
            <Icon
              key={index}
              as={items.icon}
              boxSize={"10"}
              color={items.color}
            ></Icon>
          ))}
        </Stack>
      ) : null}
    </Container>
  );
};

const TechnologiesSection = () => {
  return (
    <>
      <Box my={"20"} as={"section"} id={"technologies"}>
        <Heading mb={"10"}>Technologies</Heading>
        <Flex flexDirection={{ base: "column", md: "row" }} gap={"10"} p={"5"}>
          {items.map((item, index) => (
            <ItemCard key={index} item={item} />
          ))}
        </Flex>
      </Box>
    </>
  );
};

export default TechnologiesSection;
