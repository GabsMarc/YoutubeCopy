'use client'

import { VscHome } from "react-icons/vsc";
import { SiYoutubeshorts } from "react-icons/si";
import { CiYoutube } from "react-icons/ci";
import { PiUserCircleFill } from "react-icons/pi";



export default function ButtonSideClose() {

    const ButtonOptions = [
        {
            id: 1,
            icon: <VscHome className="text-white w-[24px] h-[24px]" />,
            title: <p className="text-[11px] text-white">Início</p>
        },
        {
            id: 2,
            icon: <SiYoutubeshorts className="text-white w-[24px] h-[24px]" />,
            title: <p className="text-[11px] text-white">Início</p>
        },
        {
            id: 3,
            icon: <CiYoutube className="text-white w-[24px] h-[24px]" />,
            title: <p className="text-[11px] text-white">Início</p>
        },
        {
            id: 4,
            icon: <PiUserCircleFill className="text-white w-[24px] h-[24px]" />,
            title: <p className="text-[11px] text-white">Início</p>
        },
    ]



    return (
        <div className="mt-[63px]">

            {ButtonOptions.map((option) => (
                <div key={option.id} className="w-[64px] h-[73px] rounded-[10px] hover:bg-[#272727] flex flex-col justify-center items-center cursor-pointer">
                    {option.icon}
                    {option.title}
                </div>
            ))}

        </div>

    )
}