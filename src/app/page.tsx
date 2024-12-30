"use client"
import { Header } from "@/components/Header";
import { SideBar } from "@/components/Sidebar";

export default function Home() {

  return (
    <div className="bg-black h-[900px] ">

      <SideBar />
      <Header />

    </div>
  )
}