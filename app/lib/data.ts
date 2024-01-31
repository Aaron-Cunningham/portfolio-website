import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import LotteryWebApp from "@/public/LotteryWebApp.png";
import translateImg from "@/public/translate.png";
import AirBnbIMG from "@/public/airbnb.png"
import EE from "@/public/ee.png"



export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    id: 1,
    title: "Computing Student",
    location: "Middlesbrough College, UK",
    description: "Finished my course at college. Here I learned about Java, WebDev, Databases, Life cycle, and Mathematics. I finished the course with 45/45 credits at Distinction.",
    icon: React.createElement(LuGraduationCap),
    date: "2021-2022",
  },
  {
    id: 2,
    title: "Computer Science Student",
    location: "Newcastle University, UK",
    description: "Full-time student studying Computer Science. Focusing on Programming, discrete Mathematics, Databases, Web Security, Networks, Operating Systems, and much more!",
    icon: React.createElement(LuGraduationCap),
    date: "2022 - 2025",
  },
] as const;


export const projectsData = [
  {
    title: "EE Car rental (Under Development)",
    description:
        "This app is a frontend project built using HTML, CSS, and JavaScript. Although still under development, it is a Car rental website built in React.",
    tags: ["CSS", "HTML", "JavaScript"],
    imageUrl: EE,
    sourceCode: "https://github.com/Aaron-Cunningham/car-rental",
    liveSite: 'https://car-rental-six-iota.vercel.app/'
  },
  {
    title: "AirBnb Clone (Frontend)",
    description:
        "This app is a frontend project that focuses on the beautiful design and layout of AirBnb, it has a search function with react-date-range, and results page with implemented Map-GL ",
    tags: ["Next.js", "Tailwind", "TypeScript", "JavaScript", "Map-GL", "GeoLib", "React-date-range"],
    imageUrl: AirBnbIMG,
    sourceCode: "https://github.com/Aaron-Cunningham/AirBnbClone",
    liveSite: 'https://air-bnb-topaz.vercel.app/'
  },
  {
    title: "LotteryWebApp",
    description:
      "This app allows users to submit numbers for a lottery draw and also allows admins to play draws. This app is very security heavy with lots of authentication, authorisation, logging, and more!",
    tags: ["Python", "Flask", "MYSQL", "JavaScript", "HTML"],
    imageUrl: LotteryWebApp,
    sourceCode: "https://github.com/Aaron-Cunningham/LotteryWebApp",
    liveSite: false
  },
  {
    title: "TranslatorApp",
    description:
      "•\tCollaborated with a dynamic team of 4 peers. Our collaborative efforts were supported by strong teamwork, communication, and where each member in the team played a crucial role",
    tags: ["Java", "Hibernate", "CRUD", "MYSQL"],
    imageUrl: translateImg,
    sourceCode: "https://github.com/Aaron-Cunningham/Quiz-App",
    liveSite: false
  },
] as const;

export const skillsData = [

  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Flask",
  "Django",
  "Git",
  "Tailwind",
  "PostgreSQL",
  "Python",
  "Java",
  "Hiberate",
  "IntelliJ",
  "PyCharm",
  "VS Code"
] as const;