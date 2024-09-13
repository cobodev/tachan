import { mount } from '@vue/test-utils';
import {
  describe,
  it,
  expect,
  beforeEach,
} from 'vitest';
import LoginCardComponent from '@/components/LoginCardComponent.vue';
import { vuetify } from '@/plugins/vuetify';

describe('LoginCardComponent', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(LoginCardComponent, { global: { plugins: [vuetify] } });
  });

  /**
   * Renderiza los componentes correctamente
   */
  it('renders correctly', () => {
    expect(wrapper.findComponent({ name: 'v-card' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'v-img' }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'v-text-field', props: { label: 'Account' } }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'v-text-field', props: { label: 'Password' } }).exists()).toBe(true);
    expect(wrapper.findComponent({ name: 'v-btn', props: { type: 'submit' } }).exists()).toBe(true);
  });

  /**
   * Muestra y oculta la contraseña
   */
  it('toggles password visibility', async () => {
    // Obtiene el input
    const passwordField = wrapper.findComponent({ ref: 'password' });

    // Al inicio no se ve la password
    expect(passwordField.props('type')).toBe('password');

    // Despues de click en el ojo, se debería de ver
    await wrapper.find('.mdi-eye').trigger('click');
    expect(passwordField.props('type')).toBe('text');

    // Al volver a hacer click, se debe ocultar de nuevo
    await wrapper.find('.mdi-eye-off').trigger('click');
    expect(passwordField.props('type')).toBe('password');
  });

  /**
   * Valida el mensaje de error de los campos
   */
  it('validates form input fields', async () => {
    // Obtiene los inputs
    const accountField = wrapper.findComponent({ ref: 'account' });
    const passwordField = wrapper.findComponent({ ref: 'password' });

    // Les deja vacíos
    await accountField.setValue('');
    await passwordField.setValue('');

    // Envía el formulario
    await wrapper.findComponent({ name: 'v-form' }).trigger('submit.prevent');

    // Debe aparecer el mensaje de error
    expect(wrapper.text()).toContain('Campo obligatorio');
  });

  /**
   * Envía el formulario correctamente
   */
  it('submits form correctly when valid', async () => {
    // Obtiene los inputs
    const accountField = wrapper.findComponent({ ref: 'account' });
    const passwordField = wrapper.findComponent({ ref: 'password' });

    // Rellena los inputs correctamente
    await accountField.setValue('test@example.com');
    await passwordField.setValue('validpassword');

    // Envía el formulario
    await wrapper.findComponent({ name: 'v-form' }).trigger('submit.prevent');

    // Se debe haber enviado
    expect(wrapper.emitted()).toHaveProperty('submit');
  });
});
