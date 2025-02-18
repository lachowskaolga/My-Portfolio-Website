"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";

export default function MainCard() {
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 100]);
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
              className="text-7xl tracking-wide md:text-8xl font-bold bg-gradient-to-r from-primary to-tertiary bg-clip-text text-transparent mb-b"
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
            <motion.h5
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-primary bg-clip-text text-transparent text-2xl font-bold tracking-wide"
            >
              Frontend
            </motion.h5>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-primary text-s bg-clip-text text-transparent text-base w-[600px]"
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
              className="bg-primary bg-clip-text text-transparent text-2xl font-bold tracking-wide"
            >
              Backend
            </motion.h5>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="bg-primary text-s bg-clip-text text-transparent w-[600px]"
            >
              Specjalizuję się w Pythonie i frameworkach Flask oraz Django do
              budowy aplikacji backendowych. Tworzę REST API i pracuję z bazami
              danych PostgreSQL oraz SQLite przy użyciu SQLAlchemy. Potrafię
              także implementować formularze z WTForms.
            </motion.p>
            <br />
            <br />

            <br />
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
              className="relative overflow-hidden px-8 py-4 rounded-full bg-white/5 border border-primary/50 hover:border-primary/30 transition-all group"
            >
              <span className="text-primary group-hover:text-tertiary border-tertiary transition-colors">
                Explore Work
              </span>
            </motion.button>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1.2, delay: 0.6, ease: "easeOut" }}
            className="lg:w-1/2 relative"
            style={{ y }}
          >
            <div className="relative w-full aspect-square group">
              <motion.div
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "mirror",
                }}
                className="absolute inset-0 rounded-3xl bg-gradient-to-r from-primary/30 via-secondary/30 to-tertiary/30 opacity-10 backdrop-blur"
              ></motion.div>
              <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative w-full aspect-[2.5/3] rounded-3xl overflow-hidden borderborder-white/10 bg-white/10 backdrop-blur-sm"
              >
                <Image
                  src="/portfolio.jpeg"
                  alt="Main"
                  fill
                  className="object-cover scale-130 group-hover:scale-100 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent " />
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="absolute bottom-8 left-8 "
                >
                  <div className="text-2xl font-bold text-content ">
                    Based in
                    <motion.span
                      className="block bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent"
                      animate={{ backgroundPosition: ["0% 50%", "100% 50%"] }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        repeatType: "mirror",
                      }}
                      style={{ backgroundSize: "200% 200%" }}
                    >
                      Gdańsk, PL
                    </motion.span>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
