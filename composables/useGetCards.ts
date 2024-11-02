import { onMounted, reactive } from 'vue';
import type { Card } from '../types';

const allCards = reactive<Card[]>([]);

const initializeCards = () => {
  onMounted(() => {
    allCards.splice(0, allCards.length);
    const storedCards = localStorage.getItem('storedCards');
    if (storedCards) {
      const parsedCards = JSON.parse(storedCards);
      allCards.push(...parsedCards);
    }
  })
}

const updateLocalStorage = (updatedCard: Card) : void => {
  const updatedCardIndex = allCards.findIndex((card) => card.id === updatedCard.id);
  allCards.splice(updatedCardIndex, 1, updatedCard);
  localStorage.setItem('storedCards', JSON.stringify(allCards));
}

export { allCards, initializeCards, updateLocalStorage };