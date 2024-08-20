import { defineConfig } from 'vitepress'
import themeConfig from './themeConfig.json'

// 遍历 themeConfig.sidebar 数组，元素如果有 link 属性，且其以不是以/开始， 则在前面加上 /
// 如果元素中有 items 属性，则遍历 items 数组，递归调用 processSidebar
function processSidebar(sidebar) {
  sidebar.forEach(item => {
    if (item.link && !item.link.startsWith('/')) {
      item.link = '/' + item.link
    }

    if (item.items) {
      processSidebar(item.items)
    }
  })
}
processSidebar(themeConfig.sidebar)
export default defineConfig({
  title: "System Design 101",
  description: "Explain complex systems using visuals and simple terms.",
  tagline: "Whether you're preparing for a System Design Interview or you simply want to understand how systems work beneath the surface, we hope this repository will help you achieve that.",
  themeConfig: {    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/toc' }
    ],

    "sidebar": themeConfig.sidebar,    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/crazynomad/system-design-101' }
    ],
    sitemap: {
      hostname: 'https://arch.starteam.work',
      lastmodDateOnly: true
    }
  }
})
