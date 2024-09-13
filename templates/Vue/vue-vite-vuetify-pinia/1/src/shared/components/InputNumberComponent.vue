<template>
    <v-container>
        <v-text-field
            v-model="numberValue"
            v-bind="attrs"
            type="number"
            color="green"
        >
        </v-text-field>
    </v-container>
</template>
  
<script setup>
import { ref, useAttrs } from 'vue';
import { VTextField, VContainer } from 'vuetify/components';
import { rules } from '@shared/rules';

const attrs = useAttrs();

const numberValue = ref(0);

</script>
  
<style scoped>
  /* Estilos personalizados si es necesario */
</style>