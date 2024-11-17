<template>
  <div class="card">
    <div class="card-main">
      <input v-if="isVisibleInput.question" type="text" v-model="inputs.question" @keyup.enter="confirm('question')">
      <p v-else @click="editCard('question')">{{ props.card.question }}</p>
      <input v-if="isVisibleInput.answer" type="text" v-model="inputs.answer" @keyup.enter="confirm('answer')">
      <p v-else @click="editCard('answer')">{{ props.card.answer }}</p>
    </div>
    <div>
      <p>Category: {{ props.card.category }}</p>
      <p>Compartment: {{ props.card.compartment }}</p>
      <p>Next date: {{ displayedDate }}</p>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
import type { Card } from '../types';
import { format } from 'date-fns';

const props = defineProps<{
  card: Card;
}>();

const emit = defineEmits(['updateField']);

const displayedDate = computed(() => {
  if (props.card.nextTest) {
    return format(props.card.nextTest, 'dd/MM/yyyy');
  } return '-'
})

const inputs = reactive<{question: string, answer: string}>({
  question: '',
  answer: ''
});

const isVisibleInput = reactive<{question: boolean, answer: boolean}>({
  question: false,
  answer: false,
});

const editCard = (type: 'question' | 'answer') => {
  isVisibleInput[type] = true;
  inputs[type] = props.card[type];
}

const confirm = (type: 'question' | 'answer') => {
  isVisibleInput[type] = false;
  emit('updateField', { card: props.card, type, value: inputs[type]});
}

</script>

<style lang="scss">
.card {
  border: 0.125rem solid black;
  border-radius: 0.9375em;
  padding: 10px;
  min-width: 70px;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  
  .card-main {
    text-align: center;
    font-size: 2rem;
    border-bottom: 0.125rem solid black;
    margin-bottom: 1rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;

    p {
      cursor: pointer;
      margin-block-start: 1rem;
      margin-block-end: 1rem;
    }
  }
}
</style>