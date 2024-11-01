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
      <div>
        <label for="category">Category</label>
        <select name="category" id="category" v-model="card.category">
          <option v-for="category in categories" :key="category.value" :value="category.value">{{ category.title }}</option>
        </select>
      </div>
      <button @click="addCard">Ajouter carte</button>
    </form>
  </div>
</template>

<script setup lang="ts">
const card = reactive({
  question: '',
  answer: '',
  category: 'russian',
  compartment: 1,
  nextTest: new Date(),
})

const categories = [
  {
    title: "Russe",
    value: "russian"
  },
  {
    title: "Code",
    value: "code",
  }
]

const addCard = () => {
  // localStorage.setItem()
}
</script>