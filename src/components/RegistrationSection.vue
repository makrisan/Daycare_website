<template>
  <section class="registration">
    <h2>Registreerimine</h2>
    <p>Valmis liituma meie koolitustega?</p>

    <div class="buttons">
      <button class="primary">
        Ava registreerimisleht
      </button>
    </div>
  </section>
</template>

<style scoped>
.registration {
  padding: 4rem 3rem;
  text-align: center;
  background: #faf7fa;
}

.registration p {
  margin-top: 0.75rem;
  color: #555;
}

.buttons {
  margin-top: 1.5rem;
}

button.primary {
  padding: 0.9rem 1.8rem;
  font-size: 1rem;
  border-radius: 999px;
  border: none;
  background: #c21f6f;
  color: white;
  cursor: pointer;
  transition: transform 0.15s ease, box-shadow 0.15s ease;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.12);
}

button.primary:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.16);
}
</style>
