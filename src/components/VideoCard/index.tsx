import Image from "next/image";

export function Card() {


    const vizualization = 31 + " mil"

    return (
        <div className="w-[382px] h-[320px] mb-9">
            <div className="w-[382px] h-[215px] bg-black rounded-[15px]"></div>
            <div className=" w-[100%] h-[100px] pt-2 flex">
                <div className="w-[40px] mr-[10px]">
                    <div className="bg-[url(/Eu.jpg)] rounded-full w-[40px] h-[40px] bg-cover bg-center" />
                </div>
                <div className="overflow-hidden">
                    <p className="text-white font-medium text-[17px] leading-[23px]">Testando o titulo do video aqui do meus youtube!</p>
                    <div className="text-[14px] text-[#9BAA9B] leading-[18px] pt-1">
                        <p className="hover:text-white cursor-pointer">Canal Gabriel Marcucci</p>
                        <p className="">{vizualization} visualizações ° há 2 dias</p>
                    </div>
                </div>
            </div>
        </div>
    )

}

