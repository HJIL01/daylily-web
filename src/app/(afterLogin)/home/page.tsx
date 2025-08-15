"use client";

import MainLogo from "@/assets/icons/MainLogo";
import clsx from "clsx";
import Link from "next/link";

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
          "shadow-xl shadow-black/10",
        )}
      >
        <div
          className={clsx(
            "flex flex-col items-center",
            "py-17",
            "h-[98%] w-[98%]",
            "bg-daylily-linear-200/50",
            "rounded-[2.5rem]",
          )}
        >
          <div className="mb-14 w-[7vw] min-w-50">
            <MainLogo />
          </div>

          <div className="h-full w-full">
            <h3
              className={clsx(
                "px-[7%] text-2xl font-bold text-black",
                "max-md:text-xl max-sm:text-lg",
              )}
            >
              Imported Git Repository
            </h3>
            <ul
              className={clsx(
                "grid grid-cols-2 gap-x-5 gap-y-7",
                "px-[5%] py-9",
                "max-h-4/5 overflow-y-auto",
                "scrollbar-hidden",
                "max-md:grid-cols-1",
              )}
            >
              {Array.from({ length: 25 }, (_, i) => i).map((e) => (
                <li
                  key={e}
                  className={clsx(
                    "flex items-center justify-center",
                    "rounded-3xl bg-white",
                    "shadow-primary/5 shadow-lg",
                    "transition-all duration-200",
                    "hover:shadow-primary/15 hover:shadow-lg",
                    "hover:-translate-y-2",
                    "cursor-pointer",
                  )}
                >
                  <div
                    className={clsx(
                      "h-[96%] w-[98%]",
                      "rounded-[1.6rem]",
                      "bg-daylily-linear-200/10",
                      "p-6",
                    )}
                  >
                    <div className="mb-6 flex gap-6">
                      <div
                        className={clsx(
                          "h-16 w-16 shrink-0 rounded-full",
                          "bg-gray-200",
                        )}
                      ></div>

                      <div className="flex min-w-0 flex-col">
                        <h4 className="text-xs font-semibold text-gray-600">
                          프로젝트 이름
                        </h4>
                        <Link
                          href={"/home"}
                          className={clsx(
                            "block w-full truncate",
                            "text-xxs text-gray-500",
                            "hover:!underline",
                          )}
                        >
                          daylily도커컨테이너asdasdadsaurl.com
                        </Link>
                      </div>
                    </div>

                    <Link
                      href={"/home"}
                      className={clsx(
                        "inline-block",
                        "rounded-[10rem]",
                        "bg-daylily-linear-400 text-primary",
                        "mb-3 px-4 py-3",
                        "text-sm font-medium",
                        "hover:!underline",
                      )}
                    >
                      Daylily-web/main
                    </Link>
                    <span
                      className={clsx(
                        "block",
                        "text-xs font-medium text-gray-300",
                      )}
                    >
                      Mar 29 on - main
                    </span>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
