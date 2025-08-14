import clsx from "clsx";
import { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function AfterLoginLayout({ children }: Props) {
  return (
    <div
      className={clsx(
        "h-full w-full",
        "bg-[url(/imgs/main_bg.png)]",
        "bg-cover bg-center bg-no-repeat",
      )}
    >
      {children}
    </div>
  );
}
