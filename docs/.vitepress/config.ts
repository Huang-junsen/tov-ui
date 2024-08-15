import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: 'tov-ui',
  description: '这是一个Vue3的组件库',
  srcDir: './../',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '介绍', link: '/introduce' },
      { text: '组件', link: '/components/' },
      { text: '工具', link: '/utils/' },
    ],

    sidebar: {
      '/components/': [
        { text: 'button', link: '/components/button' },
      ],
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' },
    ],
  },
  rewrites: {
    'docs/(.*)': '(.*)',
    'packages/tov-ui/src/:comp/(.*)': 'components/:comp/(.*)',
  },
})
