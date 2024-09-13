<template>
  <div class="form-container">
    <div>
      <InputText
        label="Input Text"
        width="15rem"
        v-model="inputValue"
        @click="onClickInputText"
      />
    </div>
    <div>
      <InputNumber
        label="Input Number"
        width="15rem"
        v-model="numberValue"
        :rules="[rules.required]"
      />
    </div>
    <div>
      <InputPassword
        width="15rem"
        v-model="passwordValue"
      />
    </div>
    <div>
      <AutoComplete
        label="AutoComplete"
        width="15rem"
      />
    </div>
  </div>

</template>

<script setup>
import { ref } from 'vue';
import InputText from '@shared/components/InputTextComponent.vue';
import InputNumber from '@shared/components/InputNumberComponent.vue';
import InputPassword from '@shared/components/InputPasswordComponent.vue';
import AutoComplete from '@shared/components/AutoCompleteComponent.vue';
import { rules } from '@shared/rules';

const inputValue = ref('');
const numberValue = ref(0);
const passwordValue = ref('');

const onClickInputText = () => {
  console.log('clicked');
};

</script>

<style scoped>
.form-container {
    display: flex;
    flex-direction: column;
}
</style>
