import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { doubleMemoryData, MemoryDataType } from "../../utils/memory-game"
import { MemoryCardItem } from "./card"

//tipo de attemps e allCards para exportação
type MemoryCardItemsProps = {
    attempts: number
    setAttempts: React.Dispatch<React.SetStateAction<number>>
    allCards: MemoryDataType[]
    setAllCards: React.Dispatch<React.SetStateAction<MemoryDataType[]>>
}

//exporta attemps e allCards com os tipos para ser passado para layout e memoryCardItem, assim conseguimo fazer a logica de quantas tentativas foram realizadas
export const MemoryCardItems = ({ attempts, setAttempts, allCards, setAllCards }: MemoryCardItemsProps) => {
    // estado que guardará, quando existir, o index da carta clicada para comparação posterior
    const [hasAnyClickedCard, setHasAnyClickedCard] = useState(-1);

    const handleMemoryCardItemClick = (memoryCardItem: MemoryDataType, index: number) => {
        // metodo de viragem de cartas, utiliza o hasAnyClickedCard para verificar se já existe 1 carta virada para checagem
        if (hasAnyClickedCard < 0) {
            setAllCards(allCards.map((card, cardIndex) => {
                return cardIndex === index && !card.pairFound ? { ...card, isTurned: true } : card
            }))
            setHasAnyClickedCard(index)

        } else {
            setAllCards(allCards.map((card, cardIndex) => {
                return cardIndex === index ?
                    { ...card, isTurned: true } : card
            }))
            setHasAnyClickedCard(-1)
            //verifica as tentativas e acrecenta 1
            setAttempts(attempts + 1)
        }
    }
    //filtar as cartas que estão com isTURNED: TRUE e compara os ids assim se forem iguais ambas returnam pairFound: true ficando viradas permamente
    useEffect(() => {
        if (allCards.filter((card) => card.isTurned).length > 1) {
            if (allCards.filter((card) => card.isTurned)[0].id === allCards.filter((card) => card.isTurned)[1].id) {
                toast.success('Par encontrado!')
                setAllCards(allCards.map(
                    (card) => allCards.filter(
                        (card) => card.isTurned)[0].id === card.id
                        ? { ...card, isTurned: false, pairFound: true }
                        : card
                        )
                        )
                    } else {
                        toast.warning('Par não encontrado!')
                        setTimeout(() => {
                            setAllCards(allCards.map(
                                (card) => ({ ...card, isTurned: false })
                    )
                    )
                }, 1500);
            }
        }

        //verifica se todas os pares foram encontrados se sim envia uma mensagem de parabenizando
        allCards.filter((card) => card.pairFound).length > 11 && toast.success('Parabéns, você encontrou todas as cartas!', {autoClose: false})
    }, [allCards]);

    return (
        <div className="memory-card-items d-flex justify-content-evenly flex-wrap">
            {
                //mapea o array de cartas identificando sua posição pelo index 
                allCards.map((data: MemoryDataType, index) => {
                    return (
                        //ao clicar na carta e realizada a função de pegar o index(posição da carta) e a identificação(dados da carta) 
                        <MemoryCardItem
                            index={index}
                            onClick={handleMemoryCardItemClick}
                            className="flex-fill memory-card-item d-flex justify-content-center align-items-center"
                            key={index}
                            data={data}
                        />
                    )
                })
            }
        </div>
    )

}