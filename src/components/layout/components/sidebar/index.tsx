import { useState } from 'react'
import { MemoryDataType } from '../../../../utils/memory-game'
import { SidebarAttempts } from './components/attempts'
import { SidebarResetBtn } from './components/buttons/reset'
import { SidebarCategories } from './components/categories'
import { SidebarLogo } from './components/logo'
import { SidebarTimer } from './components/timer'

import  './styles.css'

type SidebarProps = {
    attempts: number
    setAttempts: React.Dispatch<React.SetStateAction<number>>
    allCards: MemoryDataType[]
    setAllCards: React.Dispatch<React.SetStateAction<MemoryDataType[]>>
}

export const Sidebar = ({setAttempts, attempts, allCards, setAllCards}: SidebarProps) => {

    const resetMemoryCardItem = () => {
        setAttempts(0);
        setAllCards(allCards.map((card) => ({...card, isTurned: false, pairFound: false})))
    }
    
    return (
        <>
            <aside>
                <SidebarLogo />
                <SidebarCategories />
                <SidebarTimer />
                <SidebarAttempts attempts={attempts} />
                <SidebarResetBtn label='Resetar' icon={'/assets/img/svgs/restart.svg'} onClick={resetMemoryCardItem} />
                
            </aside>
        </>
    
    )

}