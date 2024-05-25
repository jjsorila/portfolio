import React, { MouseEventHandler } from "react"

export type TChoices = {
    title: string,
    id: string,
    selected: boolean,
    icon: string
}

export type TNavbarProps = {
    ui: boolean,
    setUi: React.Dispatch<React.SetStateAction<boolean>>,
    toggleSideBar: MouseEventHandler,
    choices: TChoices[],
    setChoices: React.Dispatch<React.SetStateAction<TChoices[]>>,
    changeActive: MouseEventHandler
}