import { extendTheme } from "@chakra-ui/react";

const theme = {
  styles: {
    global: {
      "html, body": {
        bg: "black",
        color: "white",
        minH: "100vh",
        overflowX: "hidden",
      },
    },
  },
};

export default extendTheme(theme);
