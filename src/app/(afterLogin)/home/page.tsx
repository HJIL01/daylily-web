import MainLogo from "@/assets/icons/MainLogo";
import clsx from "clsx";

export default function Home() {
  return (
    <div
      className={clsx(
        "flex items-center justify-center",
        "h-full w-full",
        "pt-40",
      )}
    >
      <div
        className={clsx(
          "flex items-center justify-center",
          "h-[80dvh] w-[45dvw]",
          "rounded-4xl",
          "bg-white",
          "max-md:w-[90dvw]",
          "shadow-xl",
        )}
      >
        <div
          className={clsx(
            "flex flex-col items-center",
            "px-[5%] py-17",
            "h-[98%] w-[98%]",
            "bg-daylily-linear-200/50",
            "rounded-[2.5rem]",
          )}
        >
          <div className="mb-14 w-[7vw] min-w-50">
            <MainLogo />
          </div>
          <div className="w-full">
            <h3 className="mb-9 text-2xl font-bold text-black">
              Imported Git Repository
            </h3>
            <ul
              className={clsx(
                "grid grid-cols-2 gap-x-5 gap-y-7",
                "max-h-200 overflow-y-auto",
                "scrollbar-hidden",
              )}
            >
              {Array.from({ length: 28 }, (_, i) => i).map((e) => (
                <li key={e} className="h-60 rounded-3xl bg-white">
                  카드{e + 1}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
