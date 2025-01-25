"use client"

import { Card } from "@/components/VideoCard";
import { SideBarContext } from "@/contexts/SideBar/Index";
import { useContext } from "react";

export default function Home() {

  const { sideBarType } = useContext(SideBarContext)

  return (

    <div className={`bg-[#0F0F0F] w-[100vw] h-[1000px] pt-[135px] ${sideBarType === true ? 'pl-[265px]' : 'pl-[100px]'}`}>
      <div className="flex gap-4 flex-wrap justify-items-start">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>

  )
}