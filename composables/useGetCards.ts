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

export { allCards, initializeCards };