// ({
//        baseUrl: './ajax', 　　 //相对于appDir，代表要查找js文件的起始文件夹，下文所有文件路径的定义都是基于这个baseUrl的
  
//       appDir: './', 　　 //项目根目录
//       dir: './tools',　　 //输出目录，全部文件打包后要放入的文件夹（如果没有会自动新建的）
//   　　　　/* 有了dir，就不能使用out配置项了，你在编译时它有非常明确的提示 */
//  　　　　/*"appDir" is not compatible with "out". Use "dir" instead. appDir is used to copy whole projects, where "out" with "baseUrl" is used to just optimize to one file.*/
//   　　　　/*"appDir" 和 "out"是不兼容的，需要用"dir"代替， "appDir"是用来拷贝整个项目的，"out"和"baseUrl"仅是用来优化一个文件的*/
//       modules: [
//  　　　　//要优化的模块 —— 里面的配置项即各页面的 相对baseUrl路径的 省略后缀“.js”的 入口文件(入口文件 ---- 即加载页面时引入require.js的script标签上data-main属性所指定的文件)
//  　　　　//该属性必不可少，因为一个程序至少需要有一个入口
//          { name:'main'},
//          { name:'index'} 
//  　　],

//      out: 'index-build.js',　　//输出文件名
//      name:'main',

//      fileExclusionRegExp: /^(r|build)\.js|.*\.scss$/,　　 //正则匹配过滤文件，匹配到的文件将不会被输出到输出目录去，这里过滤掉的是 r.js、build.js、*.scss三类文件
//  　　optimizeCss: 'standard',
//  　　removeCombined: true, //如果为true，优化器将从输出目录中删除已合并的文件
//  　　paths: { //各模块相对baseUrl的路径，直接从require.config的path配置中烤取即可
//          "underscore": "../libs/underscore/underscore-min",
//          "backbone": "../libs/backbone/backbone-min",
//  　　},
//      shim:{// 配置不符合AMD规范的模块，直接从require.config的shim配置中烤取即可
//          "underscore": {
//  　　        exports: "_"
//          },
//          "backbone": {
//  　　        deps: ["underscore", "jquery"],
//  　　        exports: "Backbone"
//          },
//      } 
//  })

({
    name: "main",
    out: "main-built.js",
    paths : {//这边 paths要和main的一样，这样才可以随便取 jquery22这种随意的名称
	  "jquery22" : "./jquery",//"jquery" : ["http://code.jquery.com/jquery-2.1.1.min", "js/jquery"], 第二个 参数意思是 cdn加载失败 就找本地文件
	  "common" : "./common",
	  "jquery.easing.min":"./jquery.easing.min",
	  "echarts":"./echarts"
	}

 })