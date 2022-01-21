import { Box } from "@chakra-ui/react";
import Seo from "./Seo";

export default function MainLayout({ children }) {
  return (
    <>
      <Seo />
      <Box as={"main"}>{children}</Box>
    </>
  );
}
