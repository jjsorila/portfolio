import { MouseEventHandler } from "react"
import { TChoices } from "src/App.types"

export type TSidebarProps = {
    toggleSideBar: MouseEventHandler,
    changeActive: MouseEventHandler,
    choices: TChoices[]
}