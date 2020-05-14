module.exports = {
    dest: 'dist',
    serviceWorker: true,
    themeConfig: {
        nav: [
            { text: 'Home', link: 'https://github.com/crazybber' },
            { text: 'Github', link: 'https://github.com/crazybber/docs' },
        ],
        sidebarDepth: 2,
        sidebar: [
            ['/', '起步'],
            ['/development', '发展历程'],
            ['/concept', '重要概念'],
            ['/born', '诞生过程'],
            ['/history', '更新日志'],
        ]
    },
    title: '代码的意义',
    base: '/'
}