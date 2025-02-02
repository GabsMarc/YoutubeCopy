"use client"

import { SideBarContext } from "@/contexts/SideBar/Index";
import { useContext } from "react";

export function Card() {

    const { sideBarType } = useContext(SideBarContext)


    const vizualization = Math.random() * (900 - 10) + 10

    return (
        <div className={`flex flex-col mb-10 ${sideBarType === true ? 'w-[382px]' : 'w-[425px]'} `}>
            <div className={`bg-[#3F3F3F] rounded-[15px] ${sideBarType === true ? 'w-[382px] h-[218px]' : 'w-[425px] h-[240px]'} `}></div>
            <div className="w-[90%] h-[100px] pt-2 flex">
                <div className="w-[40px] mr-[10px]">
                    <div className="bg-[url(/Eu.jpg)] rounded-full w-[40px] h-[40px] bg-cover bg-center" />
                </div>
                <div className="overflow-hidden">
                    <p className=" text-[#f1f1f1] text-[17px] font-medium leading-[23px]">Testando o titulo do video aqui do meu youtube!</p>
                    <div className="text-[15px] text-[#9BAA9B] leading-[20px] pt-1">
                        <p className="hover:text-white cursor-pointer">Canal Gabriel Marcucci</p>
                        <p>{vizualization.toFixed()} mil visualizações ° há 2 dias</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

