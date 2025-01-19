"use client"

import { Card } from "@/components/VideoCard";
import { SideBarContext } from "@/contexts/SideBar/Index";
import { useContext } from "react";

export default function Home() {

  const { sideBarType } = useContext(SideBarContext)

  return (

    <div className={`bg-[#553636] w-[100vw] h-[1000px] pt-[100px] ${sideBarType === true ? 'pl-[300px]' : 'pl-[100px]'} `}>
      <Card />
    </div>

  )
}