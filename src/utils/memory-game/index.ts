// Cria um tipo que será utilizado nas cartas do MemoryCard
export type MemoryDataType = {
    id: number;
    url: string;
    name: string;
    isTurned: boolean;
    pairFound: boolean
}
//Cria um array de cartas do tipo MemoryDataType
const memoryData: MemoryDataType[] = [
    {
        id: 0,
        url: 'android.svg',
        name: 'Android',
        isTurned: false,
        pairFound: false
    },
    {
        id: 1,
        url: 'caminhao.svg',
        name: 'Caminhão',
        isTurned: false,
        pairFound: false
    },
    {
        id: 2,
        url: 'disney.svg',
        name: 'Disney',
        isTurned: false,
        pairFound: false
    },
    {
        id: 3,
        url: 'estrela.svg',
        name: 'Estrela',
        isTurned: false,
        pairFound: false
    },
    {
        id: 4,
        url: 'gasolina.svg',
        name: 'Gasolina',
        isTurned: false,
        pairFound: false
    },
    {
        id: 5,
        url: 'moto.svg',
        name: 'Moto',
        isTurned: false,
        pairFound: false
    }
]

export const doubleMemoryData = [
    ...memoryData, 
    ...memoryData
]