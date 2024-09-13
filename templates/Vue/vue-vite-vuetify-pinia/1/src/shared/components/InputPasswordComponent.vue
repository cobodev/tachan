<template>
    <v-container>
        <v-text-field
          label="Password"
          placeholder="Enter your password"
          v-bind="attrs"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          prepend-inner-icon="mdi-lock-outline"
          @click:append-inner="visible = !visible"
        />
    </v-container>
</template>
  
<script setup>
import { ref, useAttrs } from 'vue';
import { VTextField, VContainer } from 'vuetify/components';
import { rules } from '@shared/rules';

const attrs = useAttrs();
const visible = ref(false);

const passwordValue = ref('');

</script>
  
<style scoped>
  /* Estilos personalizados si es necesario */
</style>