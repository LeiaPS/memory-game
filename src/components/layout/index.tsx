import { ReactNode } from "react"
import { MemoryDataType } from "../../utils/memory-game";
import { Sidebar } from "./components/sidebar";
import './style.css'

type LayoutProps = {
    children: ReactNode;
    attempts: number
    setAttempts: React.Dispatch<React.SetStateAction<number>>
    allCards: MemoryDataType[]
    setAllCards: React.Dispatch<React.SetStateAction<MemoryDataType[]>>
}
//recebe attemps e allCards para ser passado para layout e memoryCardItem, assim conseguimo fazer a logica de quantas tentativas foram realizadas
export const Layout = ({children, attempts, setAttempts, allCards, setAllCards}:LayoutProps) => {
    return (
        <div className="d-flex">
            <Sidebar allCards={allCards} setAllCards={setAllCards} attempts={attempts} setAttempts={setAttempts}/>
            <main>
                {children}
            </main>
        </div>
    )
}