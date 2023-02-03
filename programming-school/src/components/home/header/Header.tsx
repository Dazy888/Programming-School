import React from "react"
import { Timer } from "@/components/home/header/Timer"
import { Booking } from "@/components/home/header/Booking"

const HeaderComponent = () => {
    return(
        <header>
            <Timer/>
            <Booking/>
        </header>
    )
}

export const Header= React.memo(HeaderComponent)