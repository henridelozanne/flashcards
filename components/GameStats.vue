<template>
  <div v-if="props.gameIsOn" class="stats-wrapper">
    <div class="turn">{{ props.turn + 1 }} / {{ props.totalTurns }}</div>
    <div class="answers-recap">
      <div>Good answers : {{ props.goodAnswersTotal }} / {{ turn  }}</div>
      <div>Bad answers : {{ props.badAnswersTotal }} / {{ turn }}</div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps<{
  gameIsOn: boolean,
  turn: number,
  totalTurns: number,
  goodAnswersTotal: number,
  badAnswersTotal: number,
}>()
</script>

<style lang="scss" scoped>
.stats-wrapper {
  border: 1px solid black;
  padding: 10px;
  margin: 0 auto;
  text-align: center;
  width: fit-content;
  
  .turn {
    font-size: 2rem;
    margin-bottom: 10px;
  }

  .answers-recap {
    font-size: 1.2rem;
    display: flex;
    justify-content: center;
    gap: 20px;
  }
}
</style>