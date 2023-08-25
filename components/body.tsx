"use client";

import { useState, useEffect, ReactNode } from "react";
import { usePathname } from "next/navigation";
import NavBar from "@/components/navbar";
import Footer from "@/components/footer";
import { Toaster } from "@/components/ui/toaster";

const Body = ({
  children,
  session,
}: {
  children: ReactNode;
  session: Object | null;
}) => {
  // Navbar State
  const [navBarExpanded, setNavBarExpanded] = useState(false);

  // Reset navbar everytime path changes
  const pathname = usePathname();
  useEffect(() => {
    setNavBarExpanded(false);
  }, [pathname]);

  return (
    <body
      className={`flex min-h-screen flex-col font-inter ${
        navBarExpanded && "overflow-hidden"
      }`}
    >
      <NavBar
        navBarExpanded={navBarExpanded}
        setNavBarExpanded={setNavBarExpanded}
        session={session}
      />
      {children}
      <Footer />
      <Toaster />
    </body>
  );
};

export default Body;
