import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";

export default function MainLayout({ children }) {
  return (
    <>
      <Navbar />
      <Box as={"main"}>{children}</Box>
    </>
  );
}
