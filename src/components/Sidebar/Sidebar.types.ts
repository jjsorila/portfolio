import { MouseEventHandler } from "react"
import type { TChoices } from "../Navbar/Navbar.types"

export type TSidebarProps = {
    toggleSideBar: MouseEventHandler,
    changeActive: MouseEventHandler,
    choices: TChoices[]
}