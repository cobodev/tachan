<template>
    <v-container>
        <v-autocomplete
            label="Autocomplete"
             v-bind="attrs"
            :items="['California', 'Colorado', 'Florida', 'Georgia', 'Texas', 'Wyoming']"
            multiple
        ></v-autocomplete>
    </v-container>
</template>
  
<script setup>
import { ref, useAttrs} from 'vue';
import { VAutocomplete, VContainer } from 'vuetify/components';

const attrs = useAttrs();

const numberValue = ref(0);

</script>
  
<style scoped>
  /* Estilos personalizados si es necesario */
</style>