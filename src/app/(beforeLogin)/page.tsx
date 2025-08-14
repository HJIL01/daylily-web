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
          className={clsx("mb-14 w-full", "animate-fade-in-first opacity-0")}
        >
          <MainLogo />
        </div>

        <p
          className={clsx(
            "text-2xl text-gray-400",
            "mb-54",
            "font-medium",
            "animate-fade-in-second opacity-0",
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
            "w-full py-5",
            "text-base font-bold",
            "animate-fade-in-third opacity-0",
          )}
        >
          <span>
            <Github width={26} />
          </span>
          <span>Continue With Github</span>
        </Link>
      </div>

      {/* right */}
      <div
        className={clsx(
          "absolute right-0 bottom-0 z-10",
          "h-auto w-[55dvw] min-w-200",
          "opacity-0",
          "animate-fade-in-first",
        )}
      >
        <Image src={GlassFlowers} alt="Glass Flowers" />
      </div>
    </div>
  );
}
