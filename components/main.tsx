"use client";
import { motion } from "framer-motion";
import { FaCss3, FaNode, FaReact } from "react-icons/fa";
import {
  SiDjango,
  SiJavascript,
  SiNextdotjs,
  SiPython,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Image from "next/image";
import { ArrowTurnRightUpIcon } from "@heroicons/react/16/solid";

const projects = [
  {
    title: "Portfolio Website",
    description:
      "Nowoczesna strona portfolio stworzona przy użyciu React, TypeScript i Tailwind CSS. Prezentuje umiejętności i projekty w przejrzystym designie, zapewnia wysoką wydajność oraz pełną responsywność.",
    tech: [
      { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
      { name: "Tailwind", icon: SiTailwindcss, color: "#06B6D4" },
      { name: "JavaScript", icon: SiJavascript, color: "#FFCF50" },
    ],
    image: "/projects/PW.png",
  },

  {
    title: "Edu Website",
    description:
      "Aplikacja webowa dla sektora edukacyjnego stworzona w React i Node.js, obecnie prezentująca ofertę firmy. W kolejnych etapach rozwoju zostanie rozszerzona o formularz kontaktowy, panel logowania oraz moduł wyboru opcji, zapewniając użytkownikom jeszcze większą interaktywność i funkcjonalność.",
    tech: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Node.js", icon: FaNode, color: "#339933" },
      { name: "JavaScript", icon: SiJavascript, color: "#FFCF50" },
      { name: "CSS", icon: FaCss3, color: "#B803FF" },
    ],
    image: "/projects/ED.png",
  },
  {
    title: "PackComplex (Oficjalna strona internetowa firmy)",
    description:
      "Strona internetowa oparta na React i Node.js, zapewniająca dynamiczne animacje, intuicyjną nawigację oraz formularz kontaktowy przesyłający wiadomości bezpośrednio na firmowy e-mail. Optymalizacja i nowoczesne technologie gwarantują płynne działanie oraz doskonałe doświadczenie użytkownika.",
    tech: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "Node.js", icon: FaNode, color: "#339933" },
      { name: "JavaScript", icon: SiJavascript, color: "#FFCF50" },
      { name: "CSS", icon: FaCss3, color: "#B803FF" },
    ],
    image: "/projects/p_c.png",
  },
  {
    title: "Eat N' Split App",
    description:
      "Innowacyjna aplikacja React zaprojektowana do łatwego dzielenia rachunków ze znajomymi. Użytkownicy mogą wprowadzać wydatki w konfigurowalnym formularzu i obliczać, ile każda osoba powinna zwrócić osobie płacącej. To wygodne rozwiązanie do rozliczeń grupowych.",
    tech: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#FFCF50" },
      { name: "CSS", icon: FaCss3, color: "#B803FF" },
    ],
    image: "/projects/ENS.png",
  },
  {
    title: "usePopcorn",
    description:
      "Platforma oparta na React dla miłośników kina do śledzenia i recenzowania obejrzanych filmów. Użytkownicy mogą dodawać filmy do swojej bazy, oceniać je oraz tworzyć spersonalizowane listy tytułów z własnymi ocenami.",
    tech: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#FFCF50" },
      { name: "CSS", icon: FaCss3, color: "#B803FF" },
    ],
    image: "/projects/UP.png",
  },
  {
    title: "Ballin' E-Commerce",
    description:
      "Profesjonalnie rozwinięty podczas kursu programowania. Zbudowany przy użyciu Django, Pythona i JavaScriptu.",
    tech: [
      { name: "Python", icon: SiPython, color: "#3178C6" },
      { name: "Django", icon: SiDjango, color: "#FFCF50" },
    ],
    image: "/projects/B.png",
  },

  {
    title: "Pizza Slices",
    description:
      "Aplikacja webowa stworzona w React, pełniąca funkcję internetowego menu pizzerii. Użytkownicy mogą przeglądać ofertę, zobaczyć szczegółowe opisy pizzy oraz korzystać z intuicyjnego i przyjaznego interfejsu.",
    tech: [
      { name: "React", icon: FaReact, color: "#61DAFB" },
      { name: "JavaScript", icon: SiJavascript, color: "#FFCF50" },
      { name: "CSS", icon: FaCss3, color: "#B803FF" },
    ],
    image: "/projects/PS.png",
  },

  {
    title: "Weather App",
    description:
      "Aplikację internetowa do wyświetlania pogody, wykorzystująca API, JavaScript, Express, Node.js i EJS.",
    tech: [
      { name: "JavaScript", icon: SiJavascript, color: "#FFCF50" },
      { name: "Node.js", icon: FaNode, color: "#339933" },
      { name: "CSS", icon: FaCss3, color: "#B803FF" },
    ],
    image: "/projects/WA.png",
  },
];

export default function Main() {
  return (
    <section className="py-32 relative id='work'">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-content mb-4 text-center">
            Projekty
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {projects.map((project, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group relative h-[580px] rounded-3xl overflow-hidden bg-surface border border-white/10 cursor-pointer"
            >
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
                className="h-[200px] relative"
              >
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover"
                  priority
                />
              </motion.div>
              <motion.div
                className="p-6 h-[25px] bg-surface"
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-start mb-4 group/title">
                  <h3 className="text-2xl font-bold text-content">
                    {project.title}
                  </h3>
                  <ArrowTurnRightUpIcon className="h-6 w-6 text-content/50 group-hover/title:text-primary transition-colors duration-3" />
                </div>
                <p className="text-content/80 mb-4">{project.description}</p>

                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, j) => (
                    <span
                      key={j}
                      className="px-3 py-1 rounded-full bg-white/5 text-content/80 text-sm border border-white/5 hover:bg-surface transition-coors flex items-center gap-1.5 group/tech"
                    >
                      <tech.icon
                        style={{ color: tech.color }}
                        className="w-4 h-4 transition-colors"
                      />
                      <span className="group-hover/tech:text-contetn transition-colors">
                        {tech.name}
                      </span>
                    </span>
                  ))}
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
