import React from "react"

export type TChoices = {
    title: string,
    id: string,
    selected: boolean 
}

export type TNavbarProps = {
    ui: boolean,
    setUi?: React.Dispatch<React.SetStateAction<boolean>>
}