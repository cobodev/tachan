/* eslint-disable vue/max-len */
/** Listado de reglas para validación de campos */
export const rules = {
  required: (value: any) => !!value || 'Campo obligatorio',
  email: (value: string) => {
    const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return pattern.test(value) || 'Email inválido';
  },
  onlyPositive: (value: any) => {
    if (!value) return true;  // Permitir campo vacío
    const numberValue = parseFloat(value);
    return numberValue >= 0 || 'No se permiten valores negativos';
  },  
  minPassword: (v: string) => v.length >= 8 || 'Min 8 characters',
  onlyNumeric: (v: string) => /^\d+$/.test(v) || 'Must be numeric'
};
