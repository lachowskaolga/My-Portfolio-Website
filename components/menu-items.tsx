import React from "react";
import { motion } from "framer-motion";

function MenuItem({
  children,
  index,
  href,
}: {
  children: React.ReactNode;
  index: number;
  href: string;
}) {
  return (
    <motion.a
      href={href}
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ delay: index * 0.15, duration: 0.3, ease: "easeOut" }}
      className="relative overflow-hidden px-2 py-1"
    >
      <span className="text-content/80 hover:text-primary transition-colors">
        {children}
      </span>
    </motion.a>
  );
}

export default MenuItem;
