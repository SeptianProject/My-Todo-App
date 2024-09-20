
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { AuthProvider } from "@/context/AuthContext";

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: '400',
});

export const metadata: Metadata = {
  title: "My Todo App",
  description: "Generated by create todolist app",
};

export default function RootLayout({ children }: { children: React.ReactNode; }) {

  return (
    <html lang="en">
      <body
        className={poppins.className}>
        <ThemeProvider>
          <AuthProvider>
            {children}
          </AuthProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
