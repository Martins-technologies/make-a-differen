import { api, unwrap } from './api';

export const authService = {
  async login(credentials) {
    const res = await api.post('/auth/login', credentials);
    return unwrap(res);
  },
  async logout() {
    await api.post('/auth/logout');
  },
  async me() {
    const res = await api.get('/auth/me');
    return unwrap(res);
  },
};
