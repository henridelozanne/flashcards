<template>
  <div :class="['test-card', answerIsDisplayed ? 'answer' : 'question']">
    <main>
      <p class="question-text smooth-transition">{{ question }}</p>
      <transition name="fade">
        <p v-if="answerIsDisplayed && animationTimerFinish" class="answer-text">{{ answer }}</p>
      </transition>
    </main>
    <footer>
      <div v-if="answerIsDisplayed" class="evaluate-wrapper">
        <button @click="evaluate(true)">Good answer</button>
        <button @click="evaluate(false)">Bad answer</button>
      </div>
      <button v-else @click="flip">Flip</button>
    </footer>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps<{answerIsDisplayed: boolean, question: string, answer: string}>();

const emits = defineEmits(['flip', 'evaluate']);

const animationTimerFinish = ref(false);

const flip = () => {
  setTimeout(() => {
    animationTimerFinish.value = true;
  }, 300);
  emits('flip');
}

const evaluate = (correct: boolean) => {
  emits('evaluate', correct);
  animationTimerFinish.value = false;
}
</script>

<style lang="scss" scoped>
.test-card {
  border: 0.125rem solid black;
  text-align: center;
  width: 300px;
  height: 350px;
  margin: 20px auto 0;
  padding: 20px;
  border-radius: 0.9375em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  position: relative;

  main {
    flex-grow: 1;
  }

  .question-text {
    position: absolute;
    left: 50%;
    width: 100%;
    transform: translate(-50%, -50%);
  }

  .answer-text {
    font-size: 3rem;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }

  .evaluate-wrapper {
    display: flex;
    gap: 20px;
  }
}

.question {
  .question-text {
    font-size: 3rem;
    top: 40%;
  }
}

.answer {
  .question-text {
    font-size: 1.3rem;
    top: 10%;
  }
}

.fade-enter-active {
  transition: all 0.5s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>