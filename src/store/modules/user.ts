import { defineStore } from 'pinia';
import { store } from '/@/store';

interface UserState {
  token: string;
  tenantId: string;
}

export const useUserStore = defineStore({
  id: 'app-user',
  state: (): UserState => ({
    token: '',
    tenantId: '',
  }),
  getters: {
    getToken(): string {
      return this.token;
    },
    getTenantId(): string {
      return this.tenantId;
    },
  },
  actions: {
    setToken(info: string) {
      this.token = info ?? ''; // for null or undefined value
    },
    setTanant(info: string) {
      console.log(info, 444444444444);
      this.tenantId = info ?? ''; // for null or undefined value
    },
    resetState() {
      this.token = '';
    },
  },
});

// Need to be used outside the setup
export function useUserStoreWithOut() {
  return useUserStore(store);
}
