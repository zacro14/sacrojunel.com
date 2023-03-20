import { extendTheme } from "@chakra-ui/react";

const theme = {
  styles: {
    global: {
      "html, body": {
        bg: "black",
        color: "white",
        minH: "100vh",
        overflowX: "hidden",
        scrollBehavior: "smooth",
        scrollPaddingTop: "32",
      },
      "*:focus, *[data-focus]": {
        outline: "2px solid",
        outlineColor: "teal.400",
        outlineOffset: "3px",
      },
    },
  },
};

export default extendTheme(theme);
