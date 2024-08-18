import { defineConfig } from 'vitepress'
import themeConfig from './themeConfig.json'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "System Design 101",
  description: "Explain complex systems using visuals and simple terms.",
  tagline: "Whether you're preparing for a System Design Interview or you simply want to understand how systems work beneath the surface, we hope this repository will help you achieve that.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    "sidebar": themeConfig.sidebar,
    docFooter: {
      prev: '上一页',
      next: '下一页'
    },
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
