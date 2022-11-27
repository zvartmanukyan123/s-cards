import { createContext, useContext, useState } from "react";
import uuid from "react-uuid";
import storagesService from "../services/storage-service";

const CardContext = createContext(undefined);
const initialCards = JSON.parse(storagesService.getItem("cards")) ?? [];

function CardContextProvider({ children }) {
  const [cards, setCards] = useState(initialCards);

  const handleAdd = () => {
    const randomNumber = Math.floor(Math.random() * 1000) + 1;
    const newCard = { id: uuid(), number: randomNumber };
    const updatedCards = [...cards, newCard];
    storagesService.setItem("cards", JSON.stringify(updatedCards));
    setCards(updatedCards);
  };

  const handleRemove = (cardId) => {
    const filteredCards = cards.filter((item) => item.id !== cardId);
    storagesService.setItem("cards", JSON.stringify([...filteredCards]));
    setCards([...filteredCards]);
  };

  const handleSort = (nums) => {
    const sortedCards = nums.sort((a, b) => {
      if (a.number < b.number) {
        return -1;
      }
      if (a.number > b.number) {
        return 1;
      }
      return 0;
    });
    storagesService.setItem("number", JSON.stringify([...sortedCards]));
    setCards([...sortedCards]);
  };

  return (
    <CardContext.Provider
      value={{ cards, handleAdd, handleSort, handleRemove }}
    >
      {children}
    </CardContext.Provider>
  );
}

function useCardContext() {
  const context = useContext(CardContext);
  if (context === undefined) {
    throw new Error("useCardContext must be used within a CardContextProvider");
  }
  return context;
}

export { CardContextProvider, useCardContext };
