import { createContext, useState } from "react";

type SideBarType = {
    children: React.ReactNode
}

type SideBarContextProps = {
    sideBarType: boolean,
    HandleSideBar: (value: boolean) => void
}

export const SideBarContext = createContext<SideBarContextProps>({} as SideBarContextProps)

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
            HandleSideBar
        }}>
            <>
                {children}
            </>
        </SideBarContext.Provider>
    )
}