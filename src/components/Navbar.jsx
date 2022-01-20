import { DiCode, DiNetbeans } from "react-icons/di";
import { Box, Flex, Icon, Link, Stack, Text } from "@chakra-ui/react";

const Navbar = () => {
  const navItems = [
    {
      id: 1,
      title: "Projects",
    },
    {
      id: 2,
      title: "Tech Stacks",
    },
  ];
  return (
    <>
      <Box as={"header"} px={"10"} py={"5"}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Link href="/">Logo</Link>
          <Stack direction={"row"} as={"nav"} fontWeight={"semibold"}>
            <Link px={"5"} display={"flex"} alignItems={"center"}>
              <Icon as={DiNetbeans} w={4} h={4} />
              <Text pl={"1"}>Projects</Text>
            </Link>

            <Link px={"5"} display={"flex"} alignItems={"center"}>
              <Icon as={DiCode} w={6} h={6} />
              <Text pl={"1"}>Tech Stacks</Text>
            </Link>
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
