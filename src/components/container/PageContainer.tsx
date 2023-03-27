import { Box } from "@chakra-ui/react";
import React from "react";
import { Footer, Navbar } from "@/components/index";
import { MainGradient } from "../gradient";

interface PageProps {
  children?: React.ReactNode;
  gradient?: string;
}
export const PageContainer = ({ children, gradient }: PageProps) => {
  return (
    <Box>
      <Navbar />
      {/* <MainGradient /> */}
      {gradient}
      <Box
        marginX={"auto"}
        maxW={"6xl"}
        as="main"
        id="content"
        position="relative"
        zIndex={1}
      >
        {children}
      </Box>
      <Footer />
    </Box>
  );
};
