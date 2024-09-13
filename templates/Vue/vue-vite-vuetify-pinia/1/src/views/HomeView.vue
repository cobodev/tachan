<script setup lang="ts">
import { RouterLink } from 'vue-router';
import HelloWorld from '@components/HelloWorld.vue';
import TheWelcome from '@/components/TheWelcome.vue';
</script>

<template>
  <main>
    <header>
      <img
        alt="Vue logo"
        class="logo"
        src="@assets/logo.svg"
        width="125"
        height="125"
      />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />
        <nav>
          <RouterLink to="/home">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/components">Components</RouterLink>
          <RouterLink to="/login">Login</RouterLink>
        </nav>
        <TheWelcome />
      </div>
    </header>
  </main>
</template>
