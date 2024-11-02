<template>
  <div class="card">
    <div class="card-main">
      <p>{{ props.card.question }}</p>
      <p>{{ props.card.answer }}</p>
    </div>
    <p>Category: {{ props.card.category }}</p>
    <p>Compartment: {{ props.card.compartment }}</p>
    <p>Next date: {{ displayedDate }}</p>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";
import type { Card } from '../types';
import { format } from 'date-fns';

const props = defineProps<{
  card: Card;
}>();

const displayedDate = computed(() => {
  if (props.card.nextTest) {
    return format(props.card.nextTest, 'dd/MM/yyyy');
  } return '-'
})
</script>

<style lang="scss">
.card {
  border: 1px solid black;
  border-radius: 4px;
  padding: 10px;
  min-width: 70px;
  
  .card-main {
    text-align: center;
    font-size: 2rem;
    border-bottom: 1px solid black;
  }
}
</style>