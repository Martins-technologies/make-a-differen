import { api, unwrap } from './api';
import { USE_MOCK } from '@/utils/constants';
import { mockCourses } from '@/data/courses.mock';

export const coursesService = {
  async list(params) {
    if (USE_MOCK) return mockCourses.list(params);
    const res = await api.get('/courses', { params });
    return unwrap(res);
  },
  async getBySlug(slug) {
    if (USE_MOCK) return mockCourses.getBySlug(slug);
    const res = await api.get(`/courses/${slug}`);
    return unwrap(res);
  },
};
