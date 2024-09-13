<template>
  <div>
    <v-card class="mx-auto px-10 py-5">
      <!-- Logo -->
      <v-img
        class="mx-auto my-6"
        max-width="228"
        src="https://cdn.vuetifyjs.com/docs/images/logos/vuetify-logo-v3-slim-text-light.svg"
      />

      <v-form
        ref="loginForm"
        @submit.prevent="onSubmitForm"
      >
        <!-- User -->
        <v-text-field
          label="Account"
          placeholder="Email address"
          :rules="[rules.required]"
          prepend-inner-icon="mdi-email-outline"
          ref="account"
        />
        <!-- Password -->
        <v-text-field
          label="Password"
          placeholder="Enter your password"
          :rules="[rules.required, rules.email]"
          :append-inner-icon="visible ? 'mdi-eye-off' : 'mdi-eye'"
          :type="visible ? 'text' : 'password'"
          prepend-inner-icon="mdi-lock-outline"
          @click:append-inner="visible = !visible"
          ref="password"
        />
        <!-- Botón Login -->
        <v-btn
          type="submit"
          block
          class="my-3"
        >
          Log In
        </v-btn>
      </v-form>
    </v-card>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import { VCard } from 'vuetify/components/VCard';
import { VBtn } from 'vuetify/components/VBtn';
import { VImg } from 'vuetify/components/VImg';
import { VTextField } from 'vuetify/components/VTextField';
import { VForm } from 'vuetify/components/VForm';
import { rules } from '@shared/rules';

const visible = ref(false);

const loginForm = ref();

const onSubmitForm = () => {
  loginForm.value?.validate().then((res: any) => {
    console.log('formulario válido', res);
    if (res.valid) alert('Form is valid');
  });
};
</script>
