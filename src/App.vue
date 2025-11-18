<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="page">
    <header class="site-header">
      <div class="logo">
        <span class="logo-main">Elite</span>
        <span class="logo-sub">Keskus</span>
      </div>

      <nav class="nav">
        <RouterLink to="/" class="nav-link">Avaleht</RouterLink>
        <RouterLink to="/koolitus" class="nav-link">Koolitus</RouterLink>
        <!-- others will be wired later -->
        <a href="#" class="nav-link">EESTI KEEL</a>
        <a href="#" class="nav-link">INGLISE KEEL</a>
        <a href="#" class="nav-link">Lapsehoid</a>
        <a href="#" class="nav-link">Tegevused</a>
        <a href="#" class="nav-link">Registreerimine</a>
      </nav>
    </header>

    <RouterView />

    <footer class="footer">
      <p>&copy; {{ new Date().getFullYear() }} Elite Keskus. Kõik õigused kaitstud.</p>
    </footer>
  </div>
</template>
