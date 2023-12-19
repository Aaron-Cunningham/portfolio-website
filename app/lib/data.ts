import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import LotteryWebApp from "@/public/LotteryWebApp.png";
import reliableImg from "@/public/reliable-transfer.png";



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
    title: "LotteryWebApp",
    description:
      "This app allows users to submit numbers for a lottery draw and also allows admins to play draws. This app is very security heavy with lots of authentication, authorisation, logging, and more!",
    tags: ["Python", "Flask", "MYSQL", "JavaScript", "HTML"],
    imageUrl: LotteryWebApp,
    sourceCode: "https://github.com/Aaron-Cunningham/LotteryWebApp",
    liveSite: "https://www.google.com/"
  },
  {
    title: "Reliable-File-Transfer-Protocol-UDP",
    description:
      "This program implements a Reliable File Transfer (RFT) protocol using the PAR protocol on top of UDP. The RFT protocol ensures reliable delivery of a file between a client and a server.",
    tags: ["Java", "Socket Programming", "Object Serialization", "Error simulation"],
    imageUrl: reliableImg,
    sourceCode: "https://github.com/Aaron-Cunningham/Reliable-File-Transfer-Protocol-UDP",
    
  },
  {
    title: "Next",
    description:
      "",
    tags: [],
    imageUrl: reliableImg,
    sourceCode: "h",
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