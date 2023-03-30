import { IconType } from "react-icons";
import { AiFillGithub } from "react-icons/ai";
import { BiGlobe } from "react-icons/bi";
import { SiStackblitz } from "react-icons/si";

type TLink = "github" | "website" | "stackblitz";

const Links: Record<TLink, string> = {
  github: "Github",
  website: "Website",
  stackblitz: "Stackblitz",
};

const Icons: Record<TLink, IconType> = {
  github: AiFillGithub,
  website: BiGlobe,
  stackblitz: SiStackblitz,
};

export const project = [
  {
    id: 1,
    title: "MensCorner",
    desc: "An E-commerce Front End that uses Json Server for mocking a backend data. For styling its uses styled components library and using Redux Toolkit for state management.",
    image: "/images/home.JPG",
    links: [
      {
        name: Links.github,
        link: "https://github.com/zacro14/ecommerce-frontend",
        icon: Icons.github,
      },
      {
        name: Links.website,
        link: "https://menscorner.herokuapp.com/",
        icon: Icons.website,
      },
      {
        name: Links.stackblitz,
        link: "https://github.com/zacro14/ecommerce-frontend",
        icon: Icons.stackblitz,
      },
    ],
    technology: [
      { tech: "react" },
      { tech: "styled components" },
      { tech: "redux toolkit" },
      { tech: "react router" },
    ],
  },
  {
    id: 2,
    title: "Zhacks Foody",
    desc: "A Food Delivery Front End that uses firestore for backend data. It uses Next.js Framework that base on React Library for building the UI. For styling I used Chakra UI library.",
    image: "/images/zhacks foody.JPG",
    links: [
      {
        name: Links.github,
        link: "https://github.com/zacro14/zhaks-foody",
        icon: Icons.github,
      },
      {
        name: Links.website,
        link: "https://zhaks-foody.vercel.app/",
        icon: Icons.website,
      },
      {
        name: Links.stackblitz,
        link: "https://github.com/zacro14/zhaks-foody",
        icon: Icons.stackblitz,
      },
    ],
    technology: [{ tech: "react" }, { tech: "next.js" }, { tech: "chakra ui" }],
  },
  {
    id: 3,
    title: "MusicPhile",
    desc: "Music App,  I created this to practice my skills in typescript and tailwindcss",
    image: "/images/musicphile.png",
    links: [
      {
        name: Links.github,
        link: "https://github.com/zacro14/musicphile",
        icon: Icons.github,
      },
      {
        name: Links.website,
        link: "https://transpocalculator-frontend-mifvouek6-zacro14.vercel.app/en-US",
        icon: Icons.website,
      },
      {
        name: Links.stackblitz,
        link: "https://stackblitz.com/github/zacro14/musicphile",
        icon: Icons.stackblitz,
      },
    ],
    technology: [
      { tech: "react" },
      { tech: "next.js" },
      { tech: "tailwind" },
      { tech: "typescript" },
    ],
  },
  {
    id: 4,
    title: "Plarium.com Landing Page",
    desc: "Clone of the landing page of plarium.com",
    image: "/images/plarium_clone.png",
    links: [
      {
        name: Links.github,
        link: "https://github.com/zacro14/gamelord_landing",
        icon: Icons.github,
      },
      {
        name: Links.website,
        link: "https://gamelord-landing.vercel.app/",
        icon: Icons.website,
      },
      {
        name: Links.stackblitz,
        link: "https://stackblitz.com/github/zacro14/GameLord",
        icon: Icons.stackblitz,
      },
    ],
    technology: [
      { tech: "react" },
      { tech: "next.js" },
      { tech: "tailwind" },
      { tech: "typescript" },
    ],
  },

  {
    id: 5,
    title: "Porfolio Website",
    desc: "Created this for my online presence",
    image: "/screenshots/porfolio.png",
    links: [
      {
        name: Links.github,
        link: "https://github.com/zacro14/sacrojunel.com",
        icon: Icons.github,
      },
      {
        name: Links.website,
        link: "https://sacrojunel-com.vercel.app/",
        icon: Icons.website,
      },
      {
        name: Links.stackblitz,
        link: "https://stackblitz.com/github/zacro14/GameLord",
        icon: Icons.stackblitz,
      },
    ],
    technology: [
      { tech: "react" },
      { tech: "next.js" },
      { tech: "chakraui" },
      { tech: "typescript" },
    ],
  },
];
