'use client'

import "./globals.css";
import { Header } from "../components/Header"
import { SideBar } from "@/components/Sidebar";
import { useState } from "react";


export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {

  const [sideBarType, setSideBarType] = useState(true)


  function HandleSideBar(value: boolean) {
    if(sideBarType === true) {
      setSideBarType(value) 
    }
    else {
      setSideBarType(!value)
    }
  }
  

  return (
    <html lang="en">
      <body>
        <SideBar open={sideBarType} />
        <Header open={(value) => HandleSideBar(value)} />
        {children}
      </body>
    </html>
  );
}
