export default {
  top: [
    {
      name: 'Home',
      url: '/home',
      icon: 'Home',
    },
    {
      divider: true,
    },
    {
      name: 'MSISDN',
      icon: 'Smartphone',
      children: [
        {
          name: 'Daily',
          url: '/msisdn/daily',
        },
        {
          name: 'Monthly',
          url: '/msisdn/monthly',
        },
        /*{
          name: 'Buttons',
          url: '/elements/buttons',
        },
        {
          name: 'Grid',
          url: '/elements/grid',
        },
        {
          name: 'Alerts',
          url: '/elements/alerts',
        },
        {
          name: 'Typography',
          url: '/elements/typography',
        },
        {
          name: 'Cards',
          url: '/elements/cards',
        },
        {
          name: 'Tabs',
          url: '/elements/tabs',
        },
        {
          name: 'Tables',
          url: '/elements/tables',
        },
        {
          name: 'Breadcrumbs',
          url: '/elements/breadcrumbs',
        },
        {
          name: 'Forms',
          url: '/elements/forms',
        },
        {
          name: 'Modals',
          url: '/elements/modals',
        },
        {
          name: 'Loaders',
          url: '/elements/loaders',
        },
        {
          name: 'Avatars',
          url: '/elements/avatars',
        },
        {
          name: 'Progress Bars',
          url: '/elements/progressbars',
        },
        {
          name: 'Pagination',
          url: '/elements/pagination',
        },*/
      ],
    },
    {
      name: 'Network',
      icon: 'GitBranch',
      children: [
        {
          name: 'Daily',
          url: '/network/daily',
        },
        {
          name: 'Monthly',
          url: '/network/monthly',
        },
        /*{
          name: 'Blank',
          url: '/pages/blank',
        },
        {
          name: 'Sub Navigation',
          url: '/pages/subnav',
        },
        {
          name: '404',
          url: '/pages/404',
        },*/
      ],
    },
    {
      name: 'Geo-location',
      icon: 'Globe',
      children: [
        {
          name: 'Daily',
          url: '/region/daily',
        },
        {
          name: 'Monthly',
          url: '/region/monthly',
        },
        /*{
          name: 'Analytics',
          url: '/apps/analytics',
        },
        {
          name: 'Invoice',
          url: '/apps/invoice',
        },
        {
          name: 'Activity Feed',
          url: '/apps/feed',
        },
        {
          name: 'CMS',
          url: '/apps/cms',
        },*/
      ],
    },
    {
      divider: true,
    },
    /*{
      name: 'Go to Google',
      url: 'https://google.com',
      icon: 'Link',
      external: true,
      target: '_blank',
      badge: {
        text: 'CLICK ME',
      },
    }*/
  ],
  bottom: [
    {
      name: 'About',
      url: '/widget',
      icon: 'Gitlab',
    },
    /*{
      name: 'Get Vibe',
      url: 'https://github.com/NiceDash/Vibe',
      icon: 'GitHub',
      external: true,
      target: '_blank',
    },
    {
      name: 'Account',
      url: '/dashboard',
      icon: 'User',
      badge: {
        variant: 'success',
        text: '3',
      },
    },*/
  ],
};
