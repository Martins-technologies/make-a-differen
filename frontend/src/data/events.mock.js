export const mockEvents = {
  list() {
    return {
      items: [
        {
          _id: '1',
          title: 'Community Gathering',
          slug: 'community-gathering',
          summary: 'Sample event (mock data).',
          startAt: new Date(Date.now() + 86400000 * 7).toISOString(),
        },
      ],
      meta: { total: 1, page: 1, limit: 20, pages: 1 },
    };
  },
  getBySlug(slug) {
    return {
      _id: '1',
      title: 'Community Gathering',
      slug,
      summary: 'Sample event detail (mock data).',
    };
  },
};
