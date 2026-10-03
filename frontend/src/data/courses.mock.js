export const mockCourses = {
  list() {
    return {
      items: [
        {
          _id: '1',
          title: 'Welcome Workshop',
          slug: 'welcome-workshop',
          summary: 'Sample course (mock data).',
        },
      ],
      meta: { total: 1, page: 1, limit: 20, pages: 1 },
    };
  },
  getBySlug(slug) {
    return {
      _id: '1',
      title: 'Welcome Workshop',
      slug,
      summary: 'Sample course detail (mock data).',
      description: 'Content will be built from the mockup.',
    };
  },
};
