import { FaReact } from "react-icons/fa";
import {
  SiNextdotjs,
  SiVisualstudiocode,
  SiChakraui,
  SiGit,
  SiGithub,
  SiYarn,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
} from "react-icons/si";

export const items = [
  {
    title: "Technologies and Programming Language",
    icon: [
      {
        name: "Nextjs",
        icon: SiNextdotjs,
        color: "gray.900",
        link: "https://nextjs.org/",
      },
      { name: "Typescript", icon: SiTypescript, color: "blue.500" },
      { name: "Javascript", icon: SiJavascript, color: "yellow.500" },
    ],
  },
  {
    title: "Library",
    icon: [
      {
        name: "Chakraui",
        icon: SiChakraui,
        color: "#65CACC",
        link: "https://chakra-ui.com/",
      },
      {
        name: "TailwindCss",
        icon: SiTailwindcss,
        color: "rgb(56, 189, 248)",
        link: "https://tailwindcss.com/",
      },
      {
        name: "React",
        icon: FaReact,
        color: "#1788AD",
        link: "https://reactjs.org/",
      },
    ],
  },
  {
    title: "Tools",
    icon: [
      {
        name: "Git",
        icon: SiGit,
        color: "#E64A19",
        link: "https://git-scm.com/",
      },
      {
        name: "Visual Studio Code",
        icon: SiVisualstudiocode,
        color: "#22A5F1",
        link: "https://code.visualstudio.com/",
      },
      {
        name: "Github",
        icon: SiGithub,
        color: "gray.900",
        link: "https://github.com/",
      },
      {
        name: "Yarn",
        icon: SiYarn,
        color: "#2C8EBB",
        link: "https://yarnpkg.com/",
      },
    ],
  },
];
