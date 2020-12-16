import 'dotenv/config';

export default {
  expo: {
    name: 'rn_tekstitv',
    slug: 'rn_tekstitv',
    version: '1.0.0',
    orientation: 'default',
    splash: {
      resizeMode: 'contain',
      backgroundColor: '#000000',
    },
    updates: {
      fallbackToCacheTimeout: 0,
    },
    assetBundlePatterns: [
      '**/*',
    ],
    android: {
      adaptiveIcon: {
        backgroundColor: '#000000',
      },
    },
    extra: {
      yleApiKey: process.env.YLE_API_KEY,
      yleApiId: process.env.YLE_API_ID,
      yleBaseUrl: 'https://external.api.yle.fi/v1/teletext/images',
    },
  },
};
