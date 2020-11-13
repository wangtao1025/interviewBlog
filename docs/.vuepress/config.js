module.exports = {
    title: 'Hello',
    description: 'Just playing around',
    themeConfig: {
        logo: '/index.jpg',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Vue', link: '/Vue/' },
            { text: 'React', link: '/react/' },
            { text: 'Node', link: '/node/' },
            { text: 'Typescripte', link: '/ts/' },
            { text: 'Mathematics', link: '/mathematics/' },
            { text: 'Visualization', link: '/visualization/guide/' },
          ],
        sidebar:{
            '/mathematics/' :[
                '',
                'one',
                'two'
            ],
            '/Vue/':[
                ''
            ],
            '/node':[
                ''
            ],
            '/react/':[
                ''
            ]
        }
    },
    configureWebpack: {
        resolve: {
            alias: {
            '@': '/docs/.vuepress'
            }
        }
    }
}