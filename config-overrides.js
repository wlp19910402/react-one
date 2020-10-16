
const path = require("path");
const { override, fixBabelImports,addLessLoader,addWebpackAlias ,addDecoratorsLegacy} = require('customize-cra');
const theme = require('./package.json').theme;

const alter_config= ()=>(config, env)=>{
  const oneOf_loc= config.module.rules.findIndex(n=>n.oneOf)
  config.module.rules[oneOf_loc].oneOf=[    //例如要增加处理less的配置
      {
          test: /\.less$/,
          use: [
              require.resolve('style-loader'),
              {
                  loader: require.resolve('css-loader'),
                  options: {
                      importLoaders: 1,
                  },
              },
              {
                  loader: 'less-loader',
                  options: {modifyVars: theme}
              }
          ],
      },
      ...config.module.rules[oneOf_loc].oneOf
  ]

  return config;
}

module.exports= override(
  // alter_config(),   //将自定义配置组合进来
  addWebpackAlias({  //增加路径别名的处理
      '@': path.resolve(__dirname,"src"),
      "@@": path.resolve(__dirname, "src/components"),
  }),
  addDecoratorsLegacy(),

  fixBabelImports('import', {  //antd UI组件按需加载的处理
      libraryName: 'antd-mobile',
      // libraryDirectory: 'es',
      // 支持 less sass stylus
      style: true,
  }),
  addLessLoader({
    javascriptEnabled: true,
    modifyVars: theme
  })
  //  (config)=>{ //暴露webpack的配置
  //   // 去掉打包生产map 文件
  //   // config.devtool = config.mode === 'development' ? 'cheap-module-source-map' : false;
  //   // if(process.env.NODE_ENV==="production") config.devtool=false;
  //   config.devtool=false
  //   return config
  // }
)