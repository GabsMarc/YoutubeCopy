"use client"

import { Card } from "@/components/VideoCard";
import { Shorts } from "@/components/VideoShorts";
import { SideBarContext } from "@/contexts/SideBar/Index";
import { useContext } from "react";

export default function Home() {

  const { sideBarType } = useContext(SideBarContext)

  return (

    <div className={`w-[100vw] h-[100%] pt-[135px] ${sideBarType === true ? 'pl-[265px]' : 'pl-[95px]'} `}>
      <div className="pr-[38px] flex flex-wrap gap-x-[15px]">

        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />

        {/* <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card /> */}

      </div>

      <div className="pr-[38px] flex flex-wrap gap-x-[15px] mb-32 ">
        <Shorts />
        <Shorts />
        <Shorts />
        <Shorts />
        <Shorts />
        <Shorts />
      </div>



    </div>

  )
}