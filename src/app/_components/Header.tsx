"use client";

import HeaderLogo from "@/assets/icons/HeaderLogo";
import clsx from "clsx";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <motion.header
      initial={{
        height: 0,
        opacity: 0,
      }}
      animate={{
        height: "80px",
        opacity: 1,
      }}
      transition={{
        duration: 1.1,
        ease: "circInOut",
      }}
      className={clsx(
        "fixed top-0 left-0 z-[9999]",
        "overflow-y-hidden",
        "flex items-center",
        "w-full",
        "bg-transparent",
        "border-b border-gray-300",
        "px-16",
      )}
    >
      <Link href={"/"} className="inline-block h-fit w-fit">
        <HeaderLogo />
      </Link>
    </motion.header>
  );
}
