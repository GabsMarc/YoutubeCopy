'use client'

import { VscHome } from "react-icons/vsc";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { LuHistory } from "react-icons/lu";
import { CgPlayList } from "react-icons/cg";
import { GoVideo } from "react-icons/go";
import { GoClock } from "react-icons/go";
import { AiOutlineLike } from "react-icons/ai";
import { PiUserCircleFill } from "react-icons/pi";
import { BsFire } from "react-icons/bs";
import { RiShoppingBag4Line } from "react-icons/ri";
import { IoMusicalNotesOutline } from "react-icons/io5";
import { PiFilmSlate } from "react-icons/pi";
import { CiStreamOn } from "react-icons/ci";
import { SiYoutubegaming } from "react-icons/si";
import { MdNewspaper } from "react-icons/md";
import { GoTrophy } from "react-icons/go";
import { RiGraduationCapLine } from "react-icons/ri";
import { MdPodcasts } from "react-icons/md";
import { FaYoutube } from "react-icons/fa";
import { SiYoutubestudio } from "react-icons/si";
import { SiYoutubemusic } from "react-icons/si";
import { SiYoutubekids } from "react-icons/si";
import { GoGear } from "react-icons/go";
import { RiFlagLine } from "react-icons/ri";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { MdOutlineFeedback } from "react-icons/md";
import Link from "next/link";



interface IButtonProps {
    title: string
    tagName: string
    color?: string
    link?: string
}

const componentMap: Record<string, React.ElementType> = {
    VscHome,
    SiYoutubeshorts,
    MdOutlineSubscriptions,
    LuHistory,
    CgPlayList,
    GoVideo,
    GoClock,
    AiOutlineLike,
    PiUserCircleFill,
    BsFire,
    RiShoppingBag4Line,
    IoMusicalNotesOutline,
    PiFilmSlate,
    CiStreamOn,
    SiYoutubegaming,
    MdNewspaper,
    GoTrophy,
    RiGraduationCapLine,
    MdPodcasts,
    FaYoutube,
    SiYoutubestudio,
    SiYoutubemusic,
    SiYoutubekids,
    GoGear,
    RiFlagLine,
    IoMdHelpCircleOutline,
    MdOutlineFeedback
  };


export function Button({ tagName, title, color = '', link}: IButtonProps) {


    const Component = componentMap[tagName]; 


    return (
        <div>
            <Link href={`${link}`} className="w-[204] h-[40px] ml-[13px] mr-[13px] rounded-[10px] hover:bg-[#272727] flex text-white gap-6 cursor-pointer">
                <Component className={`w-[26px] h-[26px] self-center ml-3 ${color.length > 0 ? color : 'text-white'}`} />
                <span className="self-center overflow-hidden text-[15px]">{title}</span>
            </Link>
        </div>
    )
}