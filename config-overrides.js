
const { override, fixBabelImports,addLessLoader} = require('customize-cra');
module.exports = override(
          //按需导入antd的样式，最后根据import按需打包
    　　    fixBabelImports('import', {
    　　     libraryName: 'antd',
            libraryDirectory: 'es',
    　　     style: true
    　　   }),
          //antd自定义主题，对antd中的源码less变量进行重新赋值。
          addLessLoader({          
                javascriptEnabled: true,
                modifyVars: { '@primary-color': '#1DA57A' }
          }
          )
    　　 );