import { useState } from "react";
import { MemoryCardItems } from "./components/cards";
import { Layout } from "./components/layout";
import { doubleMemoryData } from "./utils/memory-game";


function App() {
  //recebe attemps e allCards para ser passado para layout e memoryCardItem, assim conseguimo fazer a logica de quantas tentativas foram realizadas
  const [attempts, setAttempts] = useState(0);
  const [allCards, setAllCards] = useState(doubleMemoryData.sort(() => Math.random() - 0.5));
  return (
    <Layout attempts={attempts} setAttempts={setAttempts} allCards={allCards} setAllCards={setAllCards}>
      <MemoryCardItems setAttempts={setAttempts} allCards={allCards} setAllCards={setAllCards} attempts={attempts}  />
    </Layout>
  );
}

export default App;
