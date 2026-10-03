export const mockResources = {
  list() {
    return {
      items: [
        {
          _id: '1',
          title: 'Getting Started Guide',
          slug: 'getting-started',
          summary: 'Sample resource (mock data).',
        },
      ],
      meta: { total: 1, page: 1, limit: 20, pages: 1 },
    };
  },
  getBySlug(slug) {
    return {
      _id: '1',
      title: 'Getting Started Guide',
      slug,
      summary: 'Sample resource detail (mock data).',
    };
  },
};
