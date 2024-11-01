<template>
  <div>
    <h1>All cards</h1>
    <div class="cards-wrapper">
      <div class="card" v-for="(card, index) in allCards" :key="index">
        <p>{{ card.question }}</p>
        <p>{{ card.answer }}</p>
      </div>
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

  .card {
    border: 1px solid black;
    padding: 10px;
    min-width: 70px;
    text-align: center;
  }
}
</style>