<!-- eslint-disable vuejs-accessibility/click-events-have-key-events -->
<template>
  <div class="text-center pa-4">
    <div @click="dialog = true">
      <slot name="activator" />
    </div>

    <v-dialog
      v-model="dialog"
      width="auto"
    >
      <v-card
        max-width="400"
        :text="msg"
        :title="$t('common.dialog.confirmation')"
      >
        <template v-slot:actions>
          <v-btn
            :text="$t('common.buttons.cancel')"
            variant="text"
            @click="dialog = false"
          />
          <v-btn
            :text="$t('common.buttons.accept')"
            color="primary"
            variant="flat"
            @click="handleClickAccept"
          />
        </template>
      </v-card>
    </v-dialog>
  </div>
</template>
<script setup lang="ts">
import { VDialog } from 'vuetify/components/VDialog';
import { VBtn } from 'vuetify/components/VBtn';
import { VCard } from 'vuetify/components/VCard';
import { ref } from 'vue';

const dialog = ref(false);

defineProps<{
  msg: string
}>();

const emit = defineEmits([
  'accept',
]);

const handleClickAccept = () => {
  dialog.value = false;
  emit('accept');
};

</script>
