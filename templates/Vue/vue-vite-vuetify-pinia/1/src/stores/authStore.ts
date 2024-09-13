import {
  type Ref,
  ref,
} from 'vue';
import { defineStore } from 'pinia';
import axios from '@plugins/axios';
import type { IUser } from '@/shared/interfaces/user.interface';

/**
 * SETUP STORE
 *
 * In Setup Stores:
 *    - ref()s become state properties
 *    - computed()s become getters
 *    - function()s become actions
 *
 * Note that you must return all state properties in setup stores for Pinia to pick them up as state.
 * In other words, you cannot have private state properties in stores.
 * Not returning all state properties can break SSR, devtools, and other plugins.
 */
export const useAuthStore = defineStore('authStore', () => {
  // Logged User
  const loggedUser: Ref<IUser | undefined> = ref();
  const setLoggedUser = (user: IUser) => {
    loggedUser.value = user;
  };

  /** Actions */
  const loginExample = () => {
    const user = {
      user: 'MyUser',
      password: 'MyPassword',
    };
    return axios.post('auth/login', user);
  };

  return {
    loggedUser,
    setLoggedUser,
    loginExample,
  };
});
