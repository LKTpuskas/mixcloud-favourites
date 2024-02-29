module.exports = {
  ci: {
    collect: {
      url: ['http://localhost:3000/'],
      startServerCommand: 'npm run dev',
      startServerTimeout: 10000,
    },
    assert: {
      assertions: {
        'categories:performance': ['error', {minScore: 0.9}],
        'categories:accessibility': ['error', {minScore: 0.9}]
      }
    },
    upload: {
      target: 'temporary-public-storage',
    },
  },
};