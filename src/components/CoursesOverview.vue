<template>
  <section class="courses">
    <h2>Koolitused ja kursused</h2>

    <div class="cards">
      <div class="card">Eesti keele koolitused</div>
      <div class="card">Inglise keel</div>
      <div class="card">Huvialakursused</div>
      <div class="card">Lastehoid</div>
    </div>
  </section>
</template>

<style scoped>
.courses {
  padding: 4rem 3rem;
}

.courses h2 {
  text-align: center;
  margin-bottom: 2rem;
}

.cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 1.5rem;
}

.card {
  padding: 2rem;
  background: white;
  border-radius: 12px;
  box-shadow: 0 3px 8px rgba(0,0,0,0.06);
  text-align: center;
  font-size: 1.1rem;
  cursor: pointer;
  transition: transform 0.2s ease;
}

.card:hover {
  transform: translateY(-5px);
}
</style>
