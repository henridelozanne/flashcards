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
interface Card {
  question: string,
  answer: string,
  category: string,
  compartment: number,
  nextTest: Date,
}

const card = reactive<Card>({
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

const allCards = reactive<Card[]>([]);

onMounted(() => {
  const storedCards = localStorage.getItem('storedCards');
  if (storedCards) {
    const parsedCards = JSON.parse(storedCards);
    allCards.push(...parsedCards);
  }
})

const resetCard = () => {
  card.question = '';
  card.answer = '';
}

const formIsComplete = computed(() => {
  return card.question !== '' && card.answer !== '';
});

const addCard = () => {
  if (!formIsComplete.value) window.alert('add required fields')
  else {
    allCards.push({...card});
    resetCard()
  }
}

function saveToLocalStorage() {
  localStorage.setItem('storedCards', JSON.stringify(allCards));
}

watch(allCards, saveToLocalStorage, { deep: true });
</script>