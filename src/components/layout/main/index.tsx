import Seo from "@/components/seo";
import { Box } from "@chakra-ui/react";
import React from "react";

interface Children {
  children: React.ReactNode;
}

export default function MainLayout({ children }: Children) {
  return (
    <>
      <Seo />
      <Box as={"main"}>{children}</Box>
    </>
  );
}
