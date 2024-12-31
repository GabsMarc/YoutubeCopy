"use client"

import Link from "next/link"
import { Button } from "./Components/buttom"




export function SideBar() {
    return (
        <div className="w-[240px] h-[100vh] bg-[#0F0F0F] fixed ]">
            <div className="h-full mt-[56px] pt-[10px] pb-[50px] overflow-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-[#717171] scrollbar-track-transparent">

                <Button />
                <Button />
                <Button />

                <div className="mt-3 mb-3 ml-[13px] mr-[5px] bg-[#303030] h-[1px]"></div>

                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />

                <div className="mt-3 mb-3 bg-[#303030] h-[1px]"></div>

                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />

                <div className="mt-3 mb-3 bg-[#303030] h-[1px]"></div>

                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />
                <Button />

                <div className="mt-3 mb-3 bg-[#303030] h-[1px]"></div>

                <Button />
                <Button />
                <Button />
                <Button />

                <div className="mt-3 mb-3 bg-[#303030] h-[1px]"></div>

                <Button />
                <Button />
                <Button />
                <Button />

                <div className="mt-3 mb-3 bg-[#303030] h-[1px]"></div>




                <div className="text-[#c3c3c3] text-[13px] leading-[18px]">
                    <div className="pl-[25px] pr-[20px] flex flex-wrap">
                        <a href="" className="pr-[10px]">Sobre</a>
                        <a href="">Imprensa</a>
                        <a href="">Direitos autorais</a>
                        <a href="">Entre em contato</a>
                        <a href="">Criadores de conteúdo</a>
                        <a href="">Publicidade</a>
                        <a href="" className="pl-[10px]">Desenvolvedores</a>
                    </div>
                    <div className="pl-[25px] pr-[20px] pt-[10px] flex flex-wrap">
                        <a href="" className="pr-[10px]">Termos</a>
                        <a href="">Privacidade</a>
                        <a href="">Política e segurança</a>
                        <a href="">Como funciona o YouTube</a>
                        <a href="">Testar os novos recursos</a>
                    </div>
                </div>

                <div className="text-[#717171] text-[12px] font-normal m-[15px] mb-[25px] pl-[10px] ">
                    © 2024 Google LLC
                </div>


            </div>
        </div>
    )
}