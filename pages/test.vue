<template>
  <div>
    <h1>test</h1>
    <button @click="startTest">Start</button>
    <div class="game-wrapper">
      <div v-if="gameIsOn" class="stats-wrapper">
        <p>{{ turn + 1 }} / {{ todaysCards.length }}</p>
        <p>{{ questionsWellAnswered.length }} good answers / {{ turn  }}</p>
        <p>{{ questionsBadAnswered.length }} bad answers / {{ turn }}</p>
      </div>
      <div v-if="questionIsDisplayed" class="question">
        <p>{{ question }}</p>
        <button @click="flip">Flip</button>
      </div>
      <div v-if="answerIsDisplayed" class="answer">
        <p>{{ answer }}</p>
        <div class="evaluate-wrapper">
          <button @click="evaluate(true)">Good answer</button>
          <button @click="evaluate(false)">Bad answer</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { allCards, initializeCards, updateLocalStorage } from '../composables/useGetCards';
import type { Card } from '../types';
import { timings } from '../constants';
import { isToday, isBefore, startOfToday, add } from 'date-fns';

initializeCards();

const todaysCards: Ref<Card[]> = ref([]);

const getTodaysCards = () : void => {
  todaysCards.value = allCards.filter((card: Card) => {
    return card.nextTest && (isToday(card.nextTest) || isBefore(card.nextTest, startOfToday()));
  })
};

onMounted(() => {
  getTodaysCards();
});

const question: Ref<string> = ref('');
const answer: Ref<string> = ref('');
const turn: Ref<number> = ref(0);
const gameIsOn: Ref<boolean> = ref(false);
const questionIsDisplayed: Ref<boolean> = ref(false);
const answerIsDisplayed: Ref<boolean> = ref(false);
const questionsWellAnswered: Ref<Card[]> = ref([]);
const questionsBadAnswered: Ref<Card[]> = ref([]);

const currentCard = computed(() => {
  return todaysCards.value[turn.value]
});

const launchNewTurn = () => {
  question.value = currentCard.value.question;
  answer.value = currentCard.value.answer;
  questionIsDisplayed.value = true;
}

const startTest = () => {
  getTodaysCards();
  if (todaysCards.value.length) {
    turn.value = 0;
    launchNewTurn();
    questionIsDisplayed.value = true;
    gameIsOn.value = true;
  } else {
    window.alert('no card for today');
  }
}

const flip = () => {
  questionIsDisplayed.value = false;
  answerIsDisplayed.value = true;
}

const resetGame = () => {
  gameIsOn.value = false;
  turn.value = 0;
  questionsWellAnswered.value.splice(0, questionsWellAnswered.value.length);
  questionsBadAnswered.value.splice(0, questionsBadAnswered.value.length);
}

const evaluate = (goodAnswer: boolean) => {
  if (currentCard.value.compartment === 7) return;
  if (goodAnswer) {
    todaysCards.value[turn.value].compartment += 1;
    todaysCards.value[turn.value].nextTest = add(new Date(), { days: timings[currentCard.value.compartment] });
    questionsWellAnswered.value.push(currentCard.value);
  }
  if (!goodAnswer) {
    todaysCards.value[turn.value].compartment = 1;
    todaysCards.value[turn.value].nextTest = new Date();
    questionsBadAnswered.value.push(currentCard.value);
  }
  updateLocalStorage(currentCard.value);
  questionIsDisplayed.value = false;
  answerIsDisplayed.value = false;
  if (turn.value < todaysCards.value.length - 1) {
    turn.value += 1;
    launchNewTurn();
  } else {
    window.alert(`total : ${questionsWellAnswered.value.length} / ${todaysCards.value.length}`)
    resetGame();
  }
}
</script>