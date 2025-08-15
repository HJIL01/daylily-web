import MainLogo from "@/assets/icons/MainLogo";
import clsx from "clsx";
import Image from "next/image";
import Link from "next/link";
import GlassFlowers from "@/../public/imgs/GlassFlowers.png";
import Github from "@/assets/icons/Github";

export default function BeforeLoginMain() {
  return (
    <div className={clsx("relative", "h-full w-full", "pt-40")}>
      {/* left */}
      <div
        className={clsx(
          "absolute top-1/5 left-1/10 z-50",
          "w-[30dvw] min-w-100",
        )}
      >
        <div
          className={clsx("mb-14 w-full", "animate-fade-in-daylily opacity-0")}
        >
          <MainLogo />
        </div>

        <p
          className={clsx(
            "text-2xl text-gray-400",
            "mb-54",
            "font-medium",
            "animate-fade-in-intro opacity-0",
            "max-md:text-lg",
            "max-sm:text-base",
          )}
        >
          개발자들이 Pull Request를 안전한 클라우드 환경에서 테스트할 수 있도록
          도와줍니다.
        </p>

        <Link
          href="/home"
          className={clsx(
            "flex items-center justify-center gap-5",
            "border-daylily-black rounded-lg border",
            "px-20 py-5",
            "font-bold",
            "animate-fade-in-login-btn opacity-0",
            "text-base max-md:text-sm max-sm:text-xs",
          )}
        >
          <span>
            <Github width={26} />
          </span>
          <span className="whitespace-nowrap">Continue With Github</span>
        </Link>
      </div>

      {/* right */}
      <div
        className={clsx(
          "absolute right-0 bottom-0 z-10",
          "h-auto w-[55dvw] min-w-200",
          "opacity-0",
          "animate-fade-in-flowers",
        )}
      >
        <Image src={GlassFlowers} alt="Glass Flowers" priority />
      </div>
    </div>
  );
}
