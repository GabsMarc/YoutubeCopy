'use client'

import { useState } from "react"
import { CiSearch } from "react-icons/ci";
import { BsFillKeyboardFill } from "react-icons/bs";
import { RxCross1 } from "react-icons/rx";


export function SearchBar() {

    const [searchValue, setSeachValue] = useState('')
    const [isActive, setIsActive] = useState(false);

    return (

        <div className="flex w-[610px] justify-end">

            <div className={`flex bg-transparent pl-[18px] text-white h-[40px] border-[1px] rounded-l-[30px] ${isActive ? "border-[#1C62B9]" : "border-[#282828]"}`}
                tabIndex={0}
                onFocus={() => setIsActive(true)}
                onBlur={() => setIsActive(false)}
            >
                <CiSearch className={`text-white w-[20px] h-[20px] self-center mr-[10px] ${isActive ? "" : "hidden"}`} />

                <input
                    className="bg-transparent placeholder:text-[#6a6a6a] placeholder:text-[17px] pb-1 text-white w-[400px] h-[40px] outline-none "
                    type="text"
                    placeholder="Pesquisar"
                    alt="Pesquisar"
                    value={searchValue}
                    onChange={e => setSeachValue(e.target.value)}
                />

                <BsFillKeyboardFill className={`text-[#8e8e8e] w-[27px] h-[22px] self-center cursor-pointer ml-[20px] ${searchValue.length > 0 ? "" : "mr-[10px]"}`} />
                <RxCross1 className={`self-center hover:bg-[#f0f0f01d] w-[35px] h-[30px] pl-[5px] pr-[5px] m-[5px] rounded-full cursor-pointer ${searchValue.length > 0 ? "" : "hidden"}`}
                    onClick={() => { setSeachValue("") }}
                />

            </div>
            <div className="w-[60px] h-[40px] bg-[#222222] rounded-r-[30px] content-center place-items-center cursor-pointer">
                <CiSearch className="text-white w-[24px] h-[24px]" />
            </div>
        </div>
    )
}