'use client'

import { HiBars3 } from "react-icons/hi2";
import Image from "next/image"
import Link from "next/link"
import { SearchBar } from "../SearchBar";


export function Header() {
    return (
        <div className="w-[100vw] h-[56px] bg-[#0F0F0F] flex px-4 ">
            <div className="flex  gap-4 items-center">
                <div className="w-10 h-10 content-center justify-items-center rounded-full hover:bg-[#f0f0f01d] hover:cursor-pointer">
                    <HiBars3 className="w-[25px] h-[25px] text-white" />
                </div>
                <a href="/">
                    <span className="fixed left-[165px] top-[10px] text-[10px] text-[#AAAAAA]">BR</span>
                    <Image src="/Youtube-white-logo.png" alt="Youtube Logo" width={91} height={0} className="" />
                </a>
            </div>
            <div className="flex justify-center m-auto self-center">
                <SearchBar/>
            </div>
            <div className="w-28 h-10  bg-gray-700"></div>
        </div>
    )

}

