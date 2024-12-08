import { ReactNode } from "react";
import { Ojuju } from "next/font/google";
import Navbar from "./Navbar";

const ojuju = Ojuju({
  subsets: ["latin"],
  weight: ["400"],
});

const Layout = ({ children }: { children: ReactNode }) => {
  return (
    <div className={`space-y-16 ${ojuju.className}`}>
      <Navbar />
      <main className="max-w-screen-xl mx-auto">{children}</main>
    </div>
  );
};

export default Layout;
