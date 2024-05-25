export type TSkillsProps = {
    ui: boolean,
    setUi?: React.Dispatch<React.SetStateAction<boolean>>
}

export type TCardsProps = {
    content: Array<{ 
        img: string, 
        zIndex: number, 
        position: string 
    }>,
    percentage: string
}