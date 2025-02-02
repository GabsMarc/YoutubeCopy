"use client"

import { SideBarContext } from "@/contexts/SideBar/Index"
import { useContext } from "react"
import { HiOutlineDotsVertical } from "react-icons/hi";



export function Shorts() {

    const vizualization = Math.random() * (900 - 100) + 100

    const { sideBarType } = useContext(SideBarContext)

    return (
        <div className={`mb-4  ${sideBarType === true ? "w-[249px]" : "w-[277px]"}`}>
            <div className={`bg-[#3F3F3F] rounded-[10px] ${sideBarType === true ? "w-[249px] h-[441px]" : "w-[277px] h-[491px]"} `}></div>
            <div className="flex">
                <div className="pt-1 pl-1 flex flex-col">
                    <p className="h-[45px] text-[#f1f1f1] text-[17px] font-medium leading-[23px] overflow-hidden">Testando o titulo do video aqui do meu youtube! Testando o titulo do video aqui do meu youtube</p>
                    <p className="text-[15px] text-[#9BAA9B] leading-[18px] pt-1">{vizualization.toFixed()} mil visualizações</p>

                </div>
                <div className="flex flex-col p-1">

                    <div className="w-[35px] h-[35px] flex items-center justify-center rounded-full hover:bg-[#272727] cursor-pointer">
                        <HiOutlineDotsVertical className="text-[23px] text-[#f1f1f1] " />
                    </div>

                </div>
            </div>
        </div>
    )
}