const path = require('path');

const resolvePath = p => path.resolve(__dirname, p);

module.exports = {
  webpack: {
    alias: {
      '@': resolvePath('./src'),
      '@components': resolvePath('./src/components'),
      '@containers': resolvePath('./src/containers'),
      '@utils': resolvePath('./src/utils'),
      '@hooks': resolvePath('./src/hooks'),
      '@routes': resolvePath('./src/routes'),
      '@reducers': resolvePath('./src/redux/reducers'),
      '@actions': resolvePath('./src/redux/actions'),
      '@store': resolvePath('./src/redux/store'),
      '@redux': resolvePath('./src/redux'),
    },
  },
};
