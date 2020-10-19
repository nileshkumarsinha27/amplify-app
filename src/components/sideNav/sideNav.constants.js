const APP_ROUTES = require('../../appRoutes');

module.exports = {
  SIDE_NAV_CONFIG: [
    {
      to: APP_ROUTES.HOME,
      name: 'Home',
      activeClassName: 'nav-item-active',
    },
    {
      to: APP_ROUTES.TO_DO,
      name: 'Todos',
      activeClassName: 'nav-item-active',
    },
  ],
  APP_TITLE: 'Sample App',
};
