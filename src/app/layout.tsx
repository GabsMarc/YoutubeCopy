"use client"

import "./globals.css";
import { Header } from "../components/Header"
import { SideBar } from "@/components/Sidebar";
import { SideBarProvider } from "@/contexts/SideBar/Index";



export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  return (
    <html lang="en">
      <body>
        <SideBarProvider>
          <SideBar />
          <Header />
          {children}
        </SideBarProvider>
      </body>
    </html>
  );
}
