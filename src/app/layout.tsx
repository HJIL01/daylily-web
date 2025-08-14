import type { Metadata } from "next";
import "@/styles/globals.css";
import clsx from "clsx";
import RQProvider from "@/components/RQProvider";
import Header from "./_components/Header";

export const metadata: Metadata = {
  title: "Daylily",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={clsx("font-pretendard antialiased")}>
        <RQProvider>
          <Header />
          <main className={clsx("h-dvh w-full")}>{children}</main>
        </RQProvider>
      </body>
    </html>
  );
}
