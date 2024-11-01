<template>
  <div>
    <h1>Add Card</h1>
    <form onsubmit="return false">
      <div>
        <label for="question">Question</label>
        <input type="text" id="question" v-model="card.question">
      </div>
      <div>
        <label for="answer">Answer</label>
        <input type="text" id="answer" v-model="card.answer">
      </div>
      <button @click="addCard">Ajouter carte</button>
    </form>
  </div>
</template>

<script setup lang="ts">
const card = reactive({
  question: '',
  answer: '',
  category: 'Russe',
  compartment: 1,
  nextTest: new Date(),
})

const addCard = () => {
  // localStorage.setItem()
}
</script>