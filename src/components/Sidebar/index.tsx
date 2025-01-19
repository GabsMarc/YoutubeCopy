"use client"


import { SideBarContext } from "@/contexts/SideBar/Index";
import SideClose from "./Components/SideClose";
import SideOpen from "./Components/SideOpen";
import { useContext } from "react";



export function SideBar(){

    const { sideBarType } = useContext(SideBarContext)
    
    return (
        <>
            {sideBarType ? <SideOpen /> : <SideClose/>}
        </>
    )

}