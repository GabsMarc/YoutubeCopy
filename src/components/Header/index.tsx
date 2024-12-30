'use client'

import { HiBars3 } from "react-icons/hi2";
import Image from "next/image"
import { SearchBar } from "../SearchBar";
import { LuArrowUpFromLine } from "react-icons/lu";
import { HiOutlineBell } from "react-icons/hi";
import { SideBar } from "../Sidebar";


export function Header() {
    return (
        <div>
            <div className="w-[100vw] h-[56px] bg-[#0F0F0F] flex px-4 fixed ">
                <div className="flex gap-4 items-center">
                    <div className="w-10 h-10 content-center justify-items-center rounded-full hover:bg-[#f0f0f01d] hover:cursor-pointer">
                        <HiBars3 className="w-[25px] h-[25px] text-white" />
                    </div>
                    <a href="/">
                        <span className="fixed left-[165px] top-[10px] text-[10px] text-[#AAAAAA]">BR</span>
                        <Image src="/Youtube-white-logo.png" alt="Youtube Logo" width={91} height={0} className="" />
                    </a>
                </div>
                <div className="flex justify-center m-auto self-center">
                    <SearchBar />
                </div>
                <div className="h-10 flex self-center items-center justify-center gap-[28px] mr-[28px]">
                    <LuArrowUpFromLine className="text-white w-[17px] h-[17px]" />
                    <HiOutlineBell className="text-white w-[23px] h-[23px]" />
                    <div className={`bg-[url("/Eu.jpg")] w-[35px] h-[35px] bg-cover rounded-full bg-center`}></div>
                </div>
            </div>
        </div>
    )

}

