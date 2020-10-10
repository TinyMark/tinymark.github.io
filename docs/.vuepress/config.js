module.exports = {
    title: 'Hello VuePress',
    description: 'Just playing around',
    themeConfig: {
        nav: [
            { text: 'Home', link: '/' },
            {
                text: 'Blog',
                items: [
                    { text: '拾遗', link: '/blog/notes/notes.md' },
                ]
            }
        ],
        sidebar: 'auto',
        lastUpdated: '上次更新', // 最后更新时间
        smoothScroll: true // 页面滚动效果
    }
}