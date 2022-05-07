import { MemoryDataType } from "../../../utils/memory-game"
import './style.css'


type MemoryCardItemProps = {
    data: MemoryDataType
    className?: string
    index: number
    onClick: (memoryCardItem: MemoryDataType, index: number) => void
}
export const MemoryCardItem = ({ data, className, onClick, index }: MemoryCardItemProps) => {
    const handleClick = () => onClick(data, index)

    return (
        <div onClick={handleClick} className={`${className}`}>
            {
            data.isTurned || data.pairFound ? <img src={`/assets/img/svgs/${data.url}`} alt="" /> : <div className="turned-off"/>
            }
        </div>
    )

}