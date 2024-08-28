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
  sitemap: {
    hostname: 'https://arch.starteam.work',
    lastmodDateOnly: true
  },
  themeConfig: {    
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Get Started', link: '/toc' }
    ],

    "sidebar": themeConfig.sidebar,    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/crazynomad/system-design-101' }
    ],
    footer: {
      message: `
        <div style="text-align: center;">
          <h3>许可证</h3>
          <p xmlns:cc="http://creativecommons.org/ns#" style="display: flex; align-items: center; justify-content: center; margin: 0;">
            本作品采用 
            <a href="http://creativecommons.org/licenses/by-nc-nd/4.0/?ref=chooser-v1" 
               target="_blank" 
               rel="license noopener noreferrer" 
               style="display: inline-block; margin-left: 5px;">
              CC BY-NC-ND 4.0
            </a>
            <span style="display: flex; align-items: center; margin-left: 5px;">
              <img style="height:22px; margin: 0 3px;" src="https://mirrors.creativecommons.org/presskit/icons/cc.svg?ref=chooser-v1">
              <img style="height:22px; margin: 0 3px;" src="https://mirrors.creativecommons.org/presskit/icons/by.svg?ref=chooser-v1">
              <img style="height:22px; margin: 0 3px;" src="https://mirrors.creativecommons.org/presskit/icons/nc.svg?ref=chooser-v1">
              <img style="height:22px; margin: 0 3px;" src="https://mirrors.creativecommons.org/presskit/icons/nd.svg?ref=chooser-v1">
            </span>
          </p>
        </div>
      `,
      copyright: 'Copyright © ByteByteGoHq'
    }
  }
})
