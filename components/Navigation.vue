<template>
  <ul>
    <li>
      <RouterLink to="/">Cards</RouterLink>
    </li>
    <li>
      <RouterLink to="/add-card">Add card</RouterLink>
    </li>
    <li>
      <RouterLink to="/test">Test</RouterLink>
    </li>
  </ul>
</template>

<style scoped>
ul {
  display: flex;
  list-style-type: none;
  gap: 20px;
}

a {
  color: black;
  text-decoration: none;
}
</style>