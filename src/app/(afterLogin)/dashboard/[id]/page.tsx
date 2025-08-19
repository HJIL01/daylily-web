import MainLogo from "@/assets/icons/MainLogo";
import clsx from "clsx";
import GlassFlower from "@/../public/imgs/GlassFlower.png";
import Image from "next/image";
import PRListContainer from "./_components/PRListContainer";

export default function page() {
  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center",
        "h-full w-full",
      )}
    >
      <div className={clsx("")}>
        <div className={clsx("mb-12 ml-25", "flex items-center")}>
          <div className="h-auto w-70">
            <MainLogo />
          </div>

          <div className="h-auto w-40">
            <Image src={GlassFlower} alt="GlassFlower" priority />
          </div>
        </div>

        <div
          className={clsx(
            "h-[60dvh] w-[71dvw]",
            "flex items-center justify-center",
            "rounded-4xl",
            "bg-white",
          )}
        >
          <div
            className={clsx(
              "flex items-center justify-center",
              "h-[98%] w-[99%]",
              "rounded-4xl",
              "bg-daylily-linear-200/30",
              "px-40 py-22",
            )}
          >
            <PRListContainer />
          </div>
        </div>
      </div>
    </div>
  );
}
