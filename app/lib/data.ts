import React from "react";
import { LuGraduationCap } from "react-icons/lu";
import LotteryWebApp from "@/public/LotteryWebApp.png";
import reliableImg from "@/public/reliable-transfer.png";
import translateImg from "@/public/translate.png";
import pagerankIMG from "@/public/page-rank.png"
import CarRentalIMG from "@/public/car-rental.png"



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
    title: "ee Car rental website",
    description:
        "This app is still a work in progess (last update 05/01/2024). The app will have a modern design, with multiple choices of car rentals.",
    tags: ["React", "CSS", "HTML", "JavaScript"],
    imageUrl: CarRentalIMG,
    sourceCode: "https://github.com/Aaron-Cunningham/car-rental-website",
    liveSite: 'https://car-rental-website-nine.vercel.app/'
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
    title: "Reliable-File-Transfer-Protocol-UDP",
    description:
      "This program implements a Reliable File Transfer (RFT) protocol using the PAR protocol on top of UDP. The RFT protocol ensures reliable delivery of a file between a client and a server.",
    tags: ["Java", "Socket Programming", "Object Serialization", "Error simulation"],
    imageUrl: reliableImg,
    sourceCode: "https://github.com/Aaron-Cunningham/Reliable-File-Transfer-Protocol-UDP",
    liveSite: false
    
  },
  {
    title: "TranslatorApp",
    description:
      "This is a very basic translator app using Google Translate API",
    tags: ["React", "JavaScript", "HTML", "CSS", "RESTful API"],
    imageUrl: translateImg,
    sourceCode: "https://github.com/Aaron-Cunningham/Translator-webapp",
    liveSite: "https://translator-webapp.vercel.app/"
  },
  {
    title: "Page-Rank-Algorithm",
    description:
        "This is a simple implementation of the page rank algorithm using the distribution and stochastic methods",
    tags: ["python", "NetworkX", ],
    imageUrl: pagerankIMG,
    sourceCode: "https://github.com/Aaron-Cunningham/Page-Rank-Algorithm",
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