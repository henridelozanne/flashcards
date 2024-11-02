<template>
  <div>
    <h1>Cards</h1>
    <div class="cards-wrapper">
      <Card v-for="card in allCards" :key="card.id" :card="card" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { allCards, initializeCards } from '../composables/useGetCards';

initializeCards();

</script>

<style lang="scss">
.cards-wrapper {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
}
</style>