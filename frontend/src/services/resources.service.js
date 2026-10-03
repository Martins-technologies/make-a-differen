import { api, unwrap } from './api';
import { USE_MOCK } from '@/utils/constants';
import { mockResources } from '@/data/resources.mock';

export const resourcesService = {
  async list(params) {
    if (USE_MOCK) return mockResources.list(params);
    const res = await api.get('/resources', { params });
    return unwrap(res);
  },
  async getBySlug(slug) {
    if (USE_MOCK) return mockResources.getBySlug(slug);
    const res = await api.get(`/resources/${slug}`);
    return unwrap(res);
  },
};
