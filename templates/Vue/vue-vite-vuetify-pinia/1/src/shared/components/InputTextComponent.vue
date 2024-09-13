<template>
    <v-container>
        <v-text-field
            v-model="textValue"
            v-bind="attrs"
            :rules="[rules.required]"
            color="green"
            clearable
        >
        </v-text-field>
    </v-container>
</template>
  
<script setup>
import { useAttrs, ref } from 'vue';
import { VTextField, VContainer } from 'vuetify/components';
import { rules } from '@shared/rules';

const attrs = useAttrs();

const textValue = ref('');

</script>
  
<style scoped>
  /* Estilos personalizados si es necesario */
</style>
  