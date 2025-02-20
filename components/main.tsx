"use client";
import { motion } from "framer-motion";
import { FaCss3, FaNode, FaReact } from "react-icons/fa";
import {
  SiDjango,
  SiJavascript,
  SiPython,
  SiSqlite,
  SiTailwindcss,
  SiTypescript,
} from "react-icons/si";
import Image from "next/image";
import { ArrowUpRightIcon } from "@heroicons/react/16/solid";

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
    link: "https://github.com/lachowskaolga/My-Portfolio-Website",
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
    link: "https://github.com/lachowskaolga/Study-Space-Matematyka",
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
    link: "https://github.com/lachowskaolga/Pack-Complex",
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
    link: "https://github.com/lachowskaolga/Eat-N-Split-App",
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
    link: "https://github.com/lachowskaolga/usePopcorn",
  },
  {
    title: "Ballin' E-Commerce",
    description:
      "Profesjonalnie rozwinięty podczas kursu programowania. Zbudowany przy użyciu Django, Pythona i JavaScriptu.",
    tech: [
      { name: "Python", icon: SiPython, color: "#3178C6" },
      { name: "Django", icon: SiDjango, color: "#FFCF50" },
      { name: "SQLite", icon: SiSqlite, color: "ffffff" },
    ],
    image: "/projects/B.png",
    link: "https://github.com/lachowskaolga/BallIn-E-Commerce-Website",
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
    link: "https://github.com/lachowskaolga/pizza-react-project",
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
    link: "https://github.com/lachowskaolga/WeatherNow-App-API",
  },
];

export default function Main() {
  return (
    <section className="py-32 relative id='work' bg-white/95">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center mb-20"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-black/80 mb-4 text-center">
            Projekty
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-primary to-tertiary rounded-full"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10 ">
          {projects.map((project, i) => (
            <a
              href={project.link} // Przeniesienie do repozytorium GitHub
              key={i}
              target="_blank" // Otwiera link w nowej karcie
              rel="noopener noreferrer" // Zapewnia bezpieczeństwo
              className="group relative h-[580px] rounded-3xl overflow-hidden bg-white border border-black/20 cursor-pointer shadow-lg"
            >
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: i * 0.1 }}
                whileHover={{ y: -10, transition: { duration: 0.2 } }}
                className="group relative h-[580px] rounded-3xl overflow-hidden bg-white border border-black/20 cursor-pointer shadow-lg"
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
                    <h3 className="text-2xl font-bold text-black/80">
                      {project.title}
                    </h3>
                    <ArrowUpRightIcon className="h-6 w-6 text-black/80 group-hover/title:text-primary transition-colors duration-3" />
                  </div>
                  <p className="text-black/80 mb-4">{project.description}</p>

                  <div className="flex flex-wrap gap-2 ">
                    {project.tech.map((tech, j) => (
                      <span
                        key={j}
                        className="px-3 py-1 rounded-full bg-black/80 text-black/80 text-sm border border-black/80 hover:bg-surface transition-coors flex items-center gap-1.5 group/tech shadow-lg"
                      >
                        <tech.icon
                          style={{ color: tech.color }}
                          className="w-4 h-4 transition-colors"
                        />
                        <span className="text-content group-hover/tech:bg-black/60 transition-colors">
                          {tech.name}
                        </span>
                      </span>
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </a>
          ))}
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          whileHover={{ scale: 1.05 }}
          className="flex justify-center mt-20 relative z-[5]"
        >
          <button className="relative px-8 py-3 rounded-full bg-black border border-white/10 hover:border-primary/10 transition-all group shadow-lg">
            <span className="text-content transition-colors relative z-[1]">
              Wszystkie Repozytoria
            </span>
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 to-tertiary/20 opacity-0 group-hover:opacity-100 transition-opacity"></div>
          </button>
        </motion.div>
      </div>
    </section>
  );
}
