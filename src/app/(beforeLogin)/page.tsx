import MainLogo from "@/assets/icons/MainLogo";
import clsx from "clsx";
import Image from "next/image";
import GlassFlowers from "@/../public/imgs/GlassFlowers.png";
import LoginBtn from "./_components/LoginBtn";
import RegisterGithubAppBtn from "./_components/RegisterGithubAppBtn";

export default function BeforeLoginMain() {
  return (
    <div className={clsx("relative", "h-full w-full", "pt-40")}>
      {/* left */}
      <div
        className={clsx(
          "absolute top-1/4 left-1/6 z-50",
          "w-[28dvw] min-w-100",
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
            "mb-45",
            "font-medium",
            "animate-fade-in-intro opacity-0",
            "max-md:text-lg",
            "max-sm:text-base",
          )}
        >
          개발자들이 Pull Request를 안전한 클라우드 환경에서 테스트할 수 있도록
          도와줍니다.
        </p>

        <div className="space-y-5">
          <RegisterGithubAppBtn />
          <LoginBtn />
        </div>
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
