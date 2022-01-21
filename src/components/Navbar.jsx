import { DiCode, DiNetbeans } from "react-icons/di";
import Logo from "../../public/logo/Logo-junelsacro.png";
import { Box, Flex, Icon, Link, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const Navbar = () => {
  const navItems = [
    {
      id: 1,
      title: "Projects",
      icon: DiNetbeans,
      size: "6",
    },
    {
      id: 2,
      title: "Tech Stacks",
      icon: DiCode,
      size: "8",
    },
  ];
  return (
    <>
      <Box as={"header"} px={"20"} py={"5"}>
        <Flex alignItems={"center"} justifyContent={"space-between"}>
          <Link href="/">
            <Box
              pos={"relative"}
              boxSize={"24"}
              transition={" 0.3s ease-in-out"}
              _hover={{
                transform: "scale(1.2)",
                transition: "0.3s ease-in 0s",
              }}
            >
              <Image src={Logo} alt="logo" layout={"fill"} />
            </Box>
          </Link>
          <Stack
            direction={"row"}
            as={"nav"}
            fontWeight={"semibold"}
            fontSize={"2xl"}
          >
            {navItems.map((item) => (
              <Link
                key={item.id}
                px={"5"}
                display={"flex"}
                alignItems={"center"}
              >
                <Icon as={item.icon} boxSize={item.size} />
                <Text pl={"1"}>{item.title}</Text>
              </Link>
            ))}

            {/* <Link px={"5"} display={"flex"} alignItems={"center"}>
              <Icon as={} w={6} h={6} />
              <Text pl={"1"}>Tech Stacks</Text>
            </Link> */}
          </Stack>
        </Flex>
      </Box>
    </>
  );
};

export default Navbar;
