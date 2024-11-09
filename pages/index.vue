<template>
  <div>
    <h1>Cards</h1>
    <div class="cards-wrapper">
      <Card
        v-for="card in allCards"
        :key="card.id"
        :card="card"
        @update-field="updateField"
      />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { allCards, initializeCards } from '../composables/useGetCards';
import type { Card } from '../types';

initializeCards();

const updateField = (payload: { card: Card, type: 'question' | 'answer', value: string}) => {
  updateLocalStorage({...payload.card, [payload.type]: payload.value})
}

</script>

<style lang="scss">
.cards-wrapper {
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;
  gap: 20px;
}
</style>