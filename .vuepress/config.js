let ogprefix = 'og: http://ogp.me/ns#'
let title = 'Knowledge Base'
let titleFull = 'Knowledge Base - PeerMe'
let description = 'Everything you need to know about the services of PeerMe.'

module.exports = {
  title,
  description,
  head: [
    ['link', { rel: 'icon', href: '/icon-192x192.png' }],
    ['link', { rel: 'manifest', href: '/manifest.json' }],
    ['meta', { name: 'theme-color', content: '#7F8FA6' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black' }],
    ['link', { rel: 'apple-touch-icon', href: '/icon-192x192.png' }],
    ['meta', { name: 'msapplication-TileImage', content: '/icon-192x192.png' }],
    ['meta', { name: 'msapplication-TileColor', content: '#000000' }],
    ['meta', { prefix: ogprefix, property: 'og:title', content: titleFull }],
    ['meta', { prefix: ogprefix, property: 'twitter:title', content: titleFull }],
    ['meta', { prefix: ogprefix, property: 'og:type', content: 'article' }],
    ['meta', { prefix: ogprefix, property: 'og:description', content: description }],
    ['meta', { prefix: ogprefix, property: 'og:image', content: '/images/og.png' }],
  ],
  themeConfig: {
    logo: '/images/logo.png',
    nav: [{ text: 'PeerMe.io', link: 'https://peerme.io' }],
    sidebar: [
      {
        title: 'General',
        collapsable: false,
        children: prefix('general', ['overview', 'philosophy', 'support']),
      },
      {
        title: 'DAOs',
        collapsable: false,
        children: prefix('daos', [
          'overview',
          'setup',
          'settings',
          'permissions',
          'actions',
          'vault',
          'security',
          'boosting',
          'plugging',
          'technical',
        ]),
      },
      {
        title: 'Features',
        collapsable: false,
        children: prefix('features', ['bot', 'events', 'log']),
      },
      {
        title: 'Developers',
        collapsable: false,
        children: prefix('developers', ['extensions', 'api', 'smart-contracts', 'clean-code']),
      },
    ],
    smoothScroll: true,
    lastUpdated: 'Last Updated',
    docsBranch: 'main',
    repo: 'peermehq/know',
    editLinks: true,
  },
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
