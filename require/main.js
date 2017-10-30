//指定网页程序的主模块
//1.声明不同js文件之间的依赖

//2.可以按需、并行、延时载入js库

//3.可以让我们的代码以模块化的方式组织
//
//
//
//加载module.js的模块
// require(['module'],function(module){
// 	module.hello()
// })

// 
// 
// 
//加载 js
require.config({
	baseUrl:'./require',
	paths : {
	  "jquery22" : "jquery",//"jquery" : ["http://code.jquery.com/jquery-2.1.1.min", "js/jquery"], 第二个 参数意思是 cdn加载失败 就找本地文件
	  "common" : "common",
	  "jquery.easing.min":"jquery.easing.min",
	  "echarts":"./echarts"
	}
});

// require(["jquery22", "jquery.easing.min" , "common"], function(){
// 	console.log("load finished");
// });

require(["jquery22"],function(){
     require(["jquery.easing.min","common"],function(){
          console.log("load finished-1");
          require(["echarts"],function(){
          	console.log("load finished-2");
		  })
     });
})
// 异步加载eharts是这样用的
require(
	    [
	        'echarts'
	    ],
	    function (ec) {
	    	var mainCont=document.getElementById('mainCont');
	        var myChart = ec.init(mainCont);
	        myChart.showLoading();
	        setTimeout(function(){
	        	var option = {
					title:{text:'初步echart 统计表'},
					tooltip:{},
					legend:{data:['用户来源','用户来源2']},
					xAxis:{data:['安卓','苹果','电脑端','其他']},
					yAxis:{},
					series:[{
						name:'访问量',
						type:'bar',
						data:[500,200,660,100]
					},
					{
						name:'用户量',
						type:'bar',
						data:[100,230,260,500]
					}
					]
	        }
	        myChart.setOption(option);
	        myChart.hideLoading();
	    },2000)
	        
	    }
);
// require(
// 	    [
// 	        'echarts'
// 	    ],
// 	    function (ec) {
// 	    	var mainCont=document.getElementById('mainCont');
// 	        var myChart = ec.init(mainCont);

// 	    //     $.get('data.json').done(function(data){
// 	    //     	var option = {
// 					// title:{text:'初步echart 异步加载数据'},
// 					// tooltip:{},
// 					// legend:{data:['访问量']},
// 					// xAxis:{data:data.name},
// 					// yAxis:{},
// 					// series:[{
// 					// 	name:'访问量',
// 					// 	type:'bar',
// 					// 	data:data.name
// 					// }]
// 	    //     	}
// 	    //     	myChart.setOption(option);
// 	    //     })
// 	       $.ajax({
// 	       	type:'GET',
// 	       	url:'./data.json',
// 	       	data:"{}",
// 	        // headers: {
// 	        //     "Access-Control-Allow-Origin":"http://example.edu",
// 	        //     "Access-Control-Allow-Headers":"X-Requested-With"
// 	        // },
// 	        // beforeSend:{}
// 	       	success:function(data){
// 	        	var option = {
// 					title:{text:'初步echart 异步加载数据'},
// 					tooltip:{},
// 					legend:{data:['访问量']},
// 					xAxis:{data:data.name},
// 					yAxis:{},
// 					series:[{
// 						name:'访问量',
// 						type:'bar',
// 						data:data.name
// 					}]
// 	        	}
// 	        	myChart.setOption(option);
// 	        },
// 	        error:function(err){
// 	        	console.log('加载失败')
// 	        }
// 	       })
// 	    }
// );