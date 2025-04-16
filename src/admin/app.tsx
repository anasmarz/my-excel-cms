import type { StrapiApp } from '@strapi/strapi/admin';

export default {
  bootstrap(app: StrapiApp) {
    app.registerPlugin({
      name: 'category-group',
      injectComponentRegistry: (componentRegistry) => {
        componentRegistry.add({ name: 'categoryGroup' });
      },
    });
    
    app.registerPlugin({
      name: 'group',
      injectComponentRegistry: (componentRegistry) => {
        componentRegistry.add({ name: 'group' });
      },
    });
  },
};