"use client";

import Github from "@/assets/icons/Github";
import clsx from "clsx";
import { useRouter } from "next/navigation";

export default function LoginBtn() {
  const router = useRouter();

  const handleLogin = () => {
    console.log(
      "https://daylily.ataidev.cc/oauth2/authorization/github-app로 이동",
    );
    router.push("https://daylily.ataidev.cc/oauth2/authorization/github-app");
  };

  return (
    <button
      onClick={handleLogin}
      className={clsx(
        "w-full",
        "flex items-center justify-center gap-5",
        "border-daylily-black rounded-lg border",
        "px-20 py-5",
        "font-bold",
        "cursor-pointer",
        "animate-fade-in-login-btn opacity-0",
        "text-base max-md:text-sm max-sm:text-xs",
      )}
    >
      <span>
        <Github width={26} />
      </span>
      <span className="whitespace-nowrap">Continue With Github</span>
    </button>
  );
}
