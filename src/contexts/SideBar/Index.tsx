import { createContext, useState } from "react";

type SideBarType = {
    children: React.ReactNode
}

export const SideBarContext = createContext({})

export const SideBarProvider = ({ children }: SideBarType) => {

    const [sideBarType, setSideBarType] = useState(true)


    function HandleSideBar(value: boolean) {
        if (sideBarType === true) {
            setSideBarType(value)
        }
        else {
            setSideBarType(!value)
        }
    }


    return (
        <SideBarContext.Provider value={{
            sideBarType,
            setSideBarType,
            HandleSideBar
        }}>
            <>
                {children}
            </>
        </SideBarContext.Provider>
    )
}