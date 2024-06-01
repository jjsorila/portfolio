export type TSkillsProps = {
    ui: boolean,
    setUi?: React.Dispatch<React.SetStateAction<boolean>>
}

export type TCardsProps = {
    content: Array<{ 
        img: string, 
        position: string,
        alt: string 
    }>,
    percentage: string
}