"use client"

import { HomeFilter } from "@/components/HomeFilter";
import { Card } from "@/components/VideoCard";
import { Shorts } from "@/components/VideoShorts";
import { SideBarContext } from "@/contexts/SideBar/Index";
import { useContext } from "react";
import { SiYoutubeshorts } from "react-icons/si";

export default function Home() {

  const { sideBarType } = useContext(SideBarContext)

  return (

    <div>

      <div className={`w-[100vw] h-[56px] bg-[#0F0F0F] mt-[55px] items-center flex fixed ${sideBarType === true ? 'ml-[265px]' : 'ml-[95px]'} `}>
        <HomeFilter />
      </div>

      <div className={`w-[100vw] h-[100%] pt-[136px] ${sideBarType === true ? 'pl-[265px]' : 'pl-[95px]'} `}>


        <div className="pr-[38px] flex flex-wrap gap-x-[15px]">

          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />
          <Card />

        </div>

        <div className="pr-[38px] flex flex-wrap gap-x-[15px] mb-10 mt-6">
          <div className="w-[100%] h-[45px] mt-2 mb-2 flex">
            <SiYoutubeshorts className="text-[#FE0201] mt-[6px] mr-3 ml-3 text-[20px]" />
            <h2 className="text-white font-medium text-[20px]">Shorts</h2>
          </div>
          <Shorts />
          <Shorts />
          <Shorts />
          <Shorts />
          <Shorts />
          <Shorts />
        </div>

        <div className="pr-[38px] flex flex-wrap gap-x-[15px]">

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
    </div>
  )
}