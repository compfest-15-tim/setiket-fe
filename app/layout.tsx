import "./globals.css";
import { Inter } from "next/font/google";
import Body from "@/components/body";
import { getServerSession } from "@/lib/auth-server";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const RootLayout = async ({ children }: { children: React.ReactNode }) => {
  // Get user session
  const session = await getServerSession();

  return (
    <html lang="en" className={`${inter.variable}`}>
      <Body session={session}>{children}</Body>
    </html>
  );
};

export default RootLayout;
