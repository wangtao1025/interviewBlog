module.exports = {
    title: 'Hello',
    description: 'Just playing around',
    base: '/MyBlog/',
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
        sidebar:[
            {
                title:'Vue',
                path:'/Vue/',
                sidebarDepth:2
            },
            {
                title:'可视化',
                path:'/visualization/guide',
                children:[
                    {
                        title:'文档',
                        path:'/visualization/document/Link.md'
                    }
                ]
            }
        ]
        // {
        //     '/mathematics/' :[
        //         '',
        //         'one',
        //         'two'
        //     ],
        //     '/Vue/':[
        //         ''
        //     ],
        //     '/node':[
        //         ''
        //     ],
        //     '/react/':[
        //         ''
        //     ],
            
        //     '/visualization/':[
        //         {
        //             '':'/visualization/guide/'
        //         },
        //         {
        //             'document':'/visulization/document/Link.md'
        //         }
        //     ]
        // }
        // {
            //     title: 'Group 1',   // 必要的
            //     path: '/foo/',      // 可选的, 标题的跳转链接，应为绝对路径且必须存在
            //     collapsable: false, // 可选的, 默认值是 true,
            //     sidebarDepth: 1,    // 可选的, 默认值是 1
            //     children: [
            //       '/'
            //     ]
            //   },
    },
    configureWebpack: {
        resolve: {
            alias: {
            '@': '/docs/.vuepress'
            }
        }
    }
}