"use client"


import SideClose from "./Components/SideClose";
import SideOpen from "./Components/SideOpen";


interface ISideBarProps {
    open: boolean
}



export function SideBar({ open }: ISideBarProps) {
    return (
        <>
            {open ? <SideOpen /> : <SideClose/>}
        </>
    )

}