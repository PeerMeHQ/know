module.exports = {
  title: 'Knowledge Base',
  themeConfig: {
    logo: '/images/logo.png',
    nav: [{ text: 'Superciety.com', link: 'https://superciety.com' }],
    sidebar: [
      {
        title: 'General',
        collapsable: false,
        children: prefix('general', ['overview', 'philosophy']),
      },
      {
        title: 'Basics',
        collapsable: false,
        children: prefix('basics', [
          // 'superids',
          // 'fellowships',
          // 'permissions',
          // 'actions',
          // 'vault',
          // 'boosting',
          // 'security',
        ]),
      },
      {
        title: 'Features',
        collapsable: false,
        children: prefix('features', [
          // 'events',
          // 'log',
        ]),
      },
      {
        title: 'Developers',
        collapsable: false,
        children: prefix('developers', ['tech-stack', 'smart-contracts', 'clean-code']),
      },
    ],
    smoothScroll: true,
    lastUpdated: 'Last Updated',
    docsBranch: 'main',
    repo: 'superciety/know',
    editLinks: true,
  },
  head: [
    ['link', { rel: 'icon', href: '/icon-192x192.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#7F8FA6' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icon-192x192.png' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icon-192x192.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
  ],
  plugins: [
    '@vuepress/active-header-links',
    '@vuepress/back-to-top',
    '@vuepress/nprogress',
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: true,
      },
    ],
  ],
}

function prefix(prefix, children) {
  return children.map((child) => `${prefix}/${child}`)
}
