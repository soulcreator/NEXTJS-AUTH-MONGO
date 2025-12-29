"use client";

import { motion } from "framer-motion";

//todo 什么时候需要加default什么时候不需要
//todo Framer Motion学习+motion.div用法
//todo 下面涉及tailwind+css的知识点
export default function AuthCard({ children }: { children: React.ReactNode }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white dark:bg-zinc-900 p-6 rounded-2xl shadow-xl w-95"
    >
      {children}
    </motion.div>
  );
}
