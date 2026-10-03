import { api, unwrap } from './api';

export const contactService = {
  async send(payload) {
    const res = await api.post('/contact', payload);
    return unwrap(res);
  },
};
