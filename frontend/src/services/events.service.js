import { api, unwrap } from './api';
import { USE_MOCK } from '@/utils/constants';
import { mockEvents } from '@/data/events.mock';

export const eventsService = {
  async list(params) {
    if (USE_MOCK) return mockEvents.list(params);
    const res = await api.get('/events', { params });
    return unwrap(res);
  },
  async getBySlug(slug) {
    if (USE_MOCK) return mockEvents.getBySlug(slug);
    const res = await api.get(`/events/${slug}`);
    return unwrap(res);
  },
};
