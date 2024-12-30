"use client"

import { Button } from "./Components/buttom"




export function SideBar() {
    return (
        <div className="w-[240px] h-[100vh] bg-[#0F0F0F] fixed">
            <div className="h-full bg-red-700 flex pt-[100px] flex-col overflow-hidden overflow-y-scroll scroll">

                <Button />

            </div>
        </div>
    )
}