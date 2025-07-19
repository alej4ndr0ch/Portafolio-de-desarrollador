import { Timeline } from "./ui/timeline"
import { motion } from "motion/react";
import { cn } from "./ui/lib/utils";
import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";
import {
    IconArrowWaveRightUp,
    IconBoxAlignRightFilled,
    IconBoxAlignTopLeft,
    IconClipboardCopy,
    IconFileBroken,
    IconSignature,
    IconTableColumn,
} from "@tabler/icons-react";
import { AuroraBackground } from "./ui/aurora-background";
import { AnimatedTooltip } from "./ui/animated-tooltip";
import { AnimatedTestimonials } from "./ui/animated-testimonials";
import { Meteors } from "./ui/meteors";
import yo from "../assets/yo.jpg"
import react from "../assets/React_logo.png"
import java from "../assets/Java_logo.png"
import javaFX from "../assets/JavaFX_Logo.png"
import mysql from "../assets/Mysql_logo.png"
import javascript from "../assets/Javascript_logo.png"
import powerBI from "../assets/logo-BI.png"
import expressJS from "../assets/Node.js_logo.png"
import pokemon from "../assets/Pokemon.png"
import agendaWeb from "../assets/agenda-web.png"
import gestorAcademico from "../assets/gestor-academico.png"
import gestorHoteleria from "../assets/gestor-hoteleria.jpg"
import banco from "../assets/Banco.png"

export const Homepage = ({
    className,
    title,
    description,
    header,
    icon }) => {


    const sampleData = [
  {
    title: "Api Pokemon",
    content: (
      <a
        href="https://github.com/alej4ndr0ch/Proyecto-React-PokemonApp"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={pokemon} alt="pokemon_project" className="rounded-lg shadow-md hover:opacity-90 transition" />
      </a>
    ),
    repo: "https://github.com/alej4ndr0ch/Proyecto-React-PokemonApp",
  },
  {
    title: "Agenda web",
    content: (
      <a
        href="https://github.com/alej4ndr0ch/Agenda-Web-B1.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={agendaWeb} alt="agenda_web" className="rounded-lg shadow-md hover:opacity-90 transition" />
      </a>
    ),
    repo: "https://github.com/alej4ndr0ch/Agenda-Web-B1.git",
  },
  {
    title: "Blog academico",
    content: (
      <a
        href="https://github.com/alej4ndr0ch/Front-End-Blog-Aprendizaje.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={gestorAcademico} alt="blog_academico" className="rounded-lg shadow-md hover:opacity-90 transition" />
      </a>
    ),
    repo: "https://github.com/alej4ndr0ch/Front-End-Blog-Aprendizaje.git",
  },
  {
    title: "Gestor Hoteleria",
    content: (
      <a
        href="https://github.com/Joxcarx888/Proyecto-Final-BIM2-Front.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={gestorHoteleria} alt="gestor_hoteleria" className="rounded-lg shadow-md hover:opacity-90 transition" />
      </a>
    ),
    repo: "https://github.com/Joxcarx888/Proyecto-Final-BIM2-Front.git",
  },
  {
    title: "Gestor Bancario",
    content: (
      <a
        href="https://github.com/DiegoGO1156/ProyectoBancario_Front.git"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img src={banco} alt="gestor_bancario" className="rounded-lg shadow-md hover:opacity-90 transition" />
      </a>
    ),
    repo: "https://github.com/DiegoGO1156/ProyectoBancario_Front.git",
  },
];


    const testimonials = [
        {
            quote:
                "Tengo un alto conocimiento en react y me encantaria algun dia poder tener mi propia empresa de tecnologia",
            name: "Alejandro Cuxún",
            designation: "Desarrollador web",
            src: yo,
        },
    ];

    const Links = [
        {
            id: 1,
            name: "Github",
            designation: "alej4ndr0ch",
            image:
                "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbqj9Ii13d6hx5a9kyLnC5A8A96LDSaSZv_w&s",
            url: "https://github.com/alej4ndr0ch"
        },
        {
            id: 2,
            name: "Instagram",
            designation: "alejandr0ch__",
            image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/960px-Instagram_logo_2022.svg.png",
            url: "https://www.instagram.com/alejandr0ch__/"
        },
        {
            id: 3,
            name: "WhatsApp",
            designation: "+502 4221-7005",
            image:
                "https://images.icon-icons.com/2592/PNG/512/whatsapp_logo_icon_154480.png",
            url: "https://wa.me/50242217005"
        },
        {
            id: 4,
            name: "Gmail",
            designation: "alejandrocuxun@gmail.com",
            image:
                "https://www.terabyte2003.com/wp-content/uploads/2018/05/Gmail-1170x882.png",
        },
        {
            id: 5,
            name: "Linkedin",
            designation: "Alejandro Cuxún",
            image:
                "https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/LinkedIn_icon.svg/800px-LinkedIn_icon.svg.png",
                url: "https://www.linkedin.com/in/alejandro-cuxun-211a78375"
        },

    ];

    const Skeleton = ({ imgSrc }) => (
        <div className="flex items-center justify-center flex-1 w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-neutral-900 dark:to-neutral-800 to-neutral-100 overflow-hidden">
            {imgSrc && (
                <img
                    src={imgSrc}
                    alt="Preview"
                    className="object-contain w-full h-full rounded-xl"
                />
            )}
        </div>
    );

    const ProgressBar = ({ value }) => {
        return (
            <div className="w-full bg-neutral-300 dark:bg-neutral-700 rounded-full h-4 relative overflow-hidden">
                <div
                    className="bg-blue-600 h-full rounded-full text-xs font-semibold text-white text-center flex items-center justify-center transition-all duration-500 ease-in-out"
                    style={{ width: `${value}%` }}
                >
                    {value}%
                </div>
            </div>
        );
    };

    const items = [
        {
            title: "React",
            description: <ProgressBar value={60} />,
            header: <Skeleton imgSrc={react} />,
            icon: <IconClipboardCopy className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "Java",
            description: <ProgressBar value={60} />,
            header: <Skeleton imgSrc={java} />,
            icon: <IconFileBroken className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "JavaFX",
            description: <ProgressBar value={50} />,
            header: <Skeleton imgSrc={javaFX} />,
            icon: <IconSignature className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "Mysql",
            description: <ProgressBar value={45} />,
            header: <Skeleton imgSrc={mysql} />,
            icon: <IconTableColumn className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "Javascript",
            description: <ProgressBar value={40} />,
            header: <Skeleton imgSrc={javascript} />,
            icon: <IconArrowWaveRightUp className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "Power BI",
            description: <ProgressBar value={35} />,
            header: <Skeleton imgSrc={powerBI} />,
            icon: <IconBoxAlignTopLeft className="h-4 w-4 text-neutral-500" />,
        },
        {
            title: "Express.js",
            description: <ProgressBar value={20} />,
            header: <Skeleton imgSrc={expressJS} />,
            icon: <IconBoxAlignRightFilled className="h-4 w-4 text-neutral-500" />,
        },
    ];


    return (
        <div className="bg-gray-900 min-h-screen">
            <AuroraBackground>
                <motion.div
                    initial={{ opacity: 0.0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{
                        delay: 0.3,
                        duration: 0.8,
                        ease: "easeInOut",
                    }}
                    className="relative flex flex-col gap-4 items-center justify-center px-4"
                >
                    <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
                        Portafolio de desarrollador
                    </div>
                    <div className="font-extralight text-base md:text-4xl dark:text-neutral-200 py-4">
                        El exito solo llega a las personas que lo buscan
                    </div>
                </motion.div>
            </AuroraBackground>
            <div className="bg-gray-900 min-h-screen">
                <div>
                    <AnimatedTestimonials testimonials={testimonials} />
                </div>
                <div className="text-3xl md:text-3xl font-bold dark:text-white text-center">
                    Redes sociales
                </div>
                <div className="flex flex-row items-center justify-center mb-10 w-full mt-10">
                    <AnimatedTooltip items={Links} />
                </div>
                <div className="text-3xl md:text-3xl font-bold dark:text-white text-center mt-30">
                    Habilidades
                </div>
                <BentoGrid className="max-w-4xl mx-auto mt-20">
                    {items.map((item, i) => (
                        <BentoGridItem
                            key={i}
                            title={item.title}
                            description={item.description}
                            header={item.header}
                            icon={item.icon}
                            className={i === 3 || i === 6 ? "md:col-span-2" : ""} />
                    ))}
                </BentoGrid>

                <div className="mt-35 ml-200">
                      <div className="relative w-full max-w-xl">
                        <div
                          className="absolute inset-0 h-full w-full scale-[0.80] transform rounded-full bg-red-500 bg-gradient-to-r from-blue-500 to-teal-500 blur-3xl" />
                        <div
                          className="relative flex h-full flex-col items-start justify-end overflow-hidden rounded-2xl border border-gray-800 bg-gray-900 px-4 py-8 shadow-xl">
                          <div
                            className="mb-4 flex h-5 w-5 items-center justify-center rounded-full border border-gray-500">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth="1.5"
                              stroke="currentColor"
                              className="h-2 w-2 text-gray-300">
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M4.5 4.5l15 15m0 0V8.25m0 11.25H8.25" />
                            </svg>
                          </div>
                
                          <h1 className="relative z-50 mb-4 text-xl font-bold text-white">
                            Curriculum
                          </h1>
                
                          <p className="relative z-50 mb-4 text-base font-normal text-slate-500">
                            Desarrollador Web con conocimientos en React, JavaScript , Power BI, mysql y Java. 
                            Apasionado por crear soluciones eficientes y dinámicas tanto en frontend como en backend.
                            tengo experiencia en trabajar para practicas en CORALSA S.A en el area de IT
                          </p>
                          {/* Meaty part - Meteor effect */}
                          <Meteors number={20} />
                        </div>
                      </div>
                    </div>

                <div className="w-full bg-transparent dark:bg-neutral-950 font-sans md:px-10 mt-80">
                    <Timeline data={sampleData} />
                </div>
            </div>
        </div>
    )

}

export default Homepage