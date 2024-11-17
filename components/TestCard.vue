<template>
  <div>
    <div v-if="questionIsDisplayed" class="question">
        <p>{{ question }}</p>
        <button @click="flip">Flip</button>
      </div>
      <div v-else-if="answerIsDisplayed" class="answer">
        <p>{{ answer }}</p>
        <div class="evaluate-wrapper">
          <button @click="evaluate(true)">Good answer</button>
          <button @click="evaluate(false)">Bad answer</button>
        </div>
      </div>
  </div>
</template>

<script lang="ts" setup>
console.log('hello')
import { defineProps, defineEmits } from "vue";

const props = defineProps<{questionIsDisplayed: boolean, answerIsDisplayed: boolean, question: string, answer: string}>();

const emits = defineEmits(['flip', 'evaluate']);

const flip = () => {
  emits('flip');
}

const evaluate = (correct: boolean) => {
  emits('evaluate', correct);
}
</script>

<style lang="scss" scoped>
.question {
  border: 1px solid black;
  text-align: center;
  font-size: 3rem;
  width: 300px;
  margin: 20px auto 0;
  padding: 20px 40px;
  border-radius: 4px;
}

.answer {
  border: 1px solid black;
  text-align: center;
  font-size: 3rem;
  width: 300px;
  margin: 20px auto 0;
  padding: 20px 40px;
  border-radius: 4px;
}
</style>