"use client";
import { motion } from "framer-motion";

export default function MainCard() {
  return (
    <section className="min-h-screen relative overflow-hidden bg-black">
      <div className="max-w-7xl mx-auto px-6 pt-32">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative group lg:w-1/2"
          >
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="text-6xl md:text-9xl font-bold bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent mb-b"
            >
              Full Stack
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
                className="bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent"
              >
                Developer
              </motion.span>
            </motion.h1>
            <br />
            <br />
            <motion.h5
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-primary bg-clip-text text-transparent text-3xl font-bold tracking-wide"
            >
              Frontend
            </motion.h5>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-primary bg-clip-text text-transparent text-base w-[600px]"
            >
              Jestem programistką frontendową z doświadczeniem w JavaScript,
              TypeScript oraz React, co pozwala mi tworzyć interaktywne
              aplikacje. Znam także jQuery, HTML5 i CSS3, co umożliwia mi
              budowanie responsywnych stron. Używam Git do kontroli wersji i
              Postman do testowania API.
            </motion.p>
            <br />
            <motion.h5
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-primary bg-clip-text text-transparent text-3xl font-bold tracking-wide"
            >
              Backend
            </motion.h5>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-primary bg-clip-text text-transparent text-base w-[600px]"
            >
              Specjalizuję się w Pythonie i frameworkach Flask oraz Django do
              budowy aplikacji backendowych. Tworzę REST API i pracuję z bazami
              danych PostgreSQL oraz SQLite przy użyciu SQLAlchemy. Potrafię
              także implementować formularze z WTForms.
            </motion.p>
            <br />
            <br />
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-primary bg-clip-text text-transparent text-base w-[600px]"
            >
              💡 Od pewnego czasu przygotowuję się do przystąpienia do
              certyfikacji AWS (Amazon Web Services), poszerzając swoją wiedzę w
              zakresie chmurowych technologii.
              <br />
            </motion.p>
            <br />
            <br />

            <br />
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 1.1 }}
              className="relative overflow-hidden px-8 py-4 rounded-full bg-surface border border-primary/50 hover:border-primary/30 transition-all group"
            >
              <span className="text-primary group-hover:text-tertiary transition-colors">
                {" "}
                Explore Work
              </span>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
