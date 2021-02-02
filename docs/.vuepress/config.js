module.exports = {
    title: 'Hello',
    description: 'Just playing around',
    base: '/MyBlog/',
    themeConfig: {
        logo: '/index.jpg',
        nav: [
            { text: 'Home', link: '/' },
            { text: 'Menu', link: '/menu/' },
            { text: 'Vue', link: '/Vue/' },
            { text: 'React', link: '/react/' },
            { text: 'Node', link: '/node/' },
            { text: 'Typescript', link: '/ts/' },
            { text: '算法', link: '/算法/' },
            { text: 'npm', link: '/npm/' },
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
                title:'Node',
                path:'/node/',
                sidebarDepth:2,
                children:[
                    {
                        title:'高阶函数和Promise',
                        path:'/node/Promise.md'
                    }
                ]
            },
            {
                title:'Typescript',
                children:[
                    {
                        title:'1:运行环境搭建',
                        path:'/ts/'
                    },
                    {
                        title:'2:基础类型',
                        path:'/ts/basicType.md'
                    },
                    {
                        title:'其他类型',
                        path:'/ts/otherType.md'
                    },
                    {
                        title:'5:类',
                        path:'/ts/class.md'
                    },
                    {
                        title:'6:接口',
                        path:'/ts/interface.md'
                    },
                    {
                        title:'变量声明',
                        path:'/ts/variable.md'
                    }
                ]
            },
            {
                title:'算法',
                path:'/算法/',
                sidebarDepth:2
            },
            {
                title:'NPM',
                path:'/npm/',
                children:[
                    {
                        title:'NRM',
                        path:'/npm/nrm.md'
                    }
                ]
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
    },
    configureWebpack: {
        resolve: {
            alias: {
            '@': '/docs/.vuepress'
            }
        }
    }
}