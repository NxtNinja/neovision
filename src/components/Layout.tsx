import { ReactNode } from "react";
import { Ojuju } from "next/font/google";

const ojuju = Ojuju({
  subsets: ["latin"],
  weight: ["400"],
});

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <>
      <main className={ojuju.className}>{children}</main>
    </>
  );
};

export default Layout;
