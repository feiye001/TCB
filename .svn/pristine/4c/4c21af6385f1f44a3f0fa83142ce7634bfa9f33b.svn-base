//数据填充
//二级菜单的第一部分
 $("#row_text").load("pad.html",function(){
	$.getJSON("../json/repair.json",function(data){
		var htmlStr = baidu.template("stuListTem",data);
		//添加数据到页面
		$("#row_text").html(htmlStr);
	});
});


//二级菜单的第二部分
 $(".disNone1_up").load("pad.html",function(){
 	$.getJSON("../json/PcFaultList.json",function(data){
 		var htmlStr = baidu.template("hot",data);
 		$(".disNone1_up").html(htmlStr);
 	});
 });

 $(".disNone1_down").load("pad.html",function(){
 	$.getJSON("../json/PcFaultList.json",function(data){
 		var htmlStr = baidu.template("hot1",data);
 		$(".disNone1_down").html(htmlStr);
 	});
 });

//二级菜单的第三部分
 $(".disNone2").load("pad.html",function(){
 	$.getJSON("../json/pinpai.json",function(data){
 		var htmlStr = baidu.template("three",data);
 		$(".disNone2").html(htmlStr);
 	});
 });

//二级菜单的第四部分
$(".disNone3").load("pad.html",function(){
	$.getJSON("../json/list4.json",function(data){
		var htmlStr = baidu.template("four",data);
		$(".disNone3").html(htmlStr);
	});
});

//手机图片数据添加
$(".hotAll_two_inner").load("pad.html",function(){
	$.getJSON("../json/phone.json",function(data){
		var htmlStr = baidu.template("phone1",data);
		$(".hotAll_two_inner").html(htmlStr);
	});
});

//手机第二部分数据导入

$("#hotAll_two_inner").load("pad.html",function(){
	$.getJSON("../json/phone2.json",function(data){
		var htmlStr = baidu.template("phone2",data);
		$("#hotAll_two_inner").html(htmlStr);
	});
});



//店铺插入数据
$(".jianjie").load("pad.html",function(){
	$.getJSON("../json/shuju.json",function(data){
		var htmlStr = baidu.template("shop_shuju",data);
		$(".jianjie").html(htmlStr);
		//店铺悬浮事件
		$(".jianjie_in").hover(function(){
			$(this).css("backgroundColor","#f7f7f7");
			$(this).find(".ianjie_in_shop").css("display","block")
		},function(){
			$(this).css("backgroundColor","");
			$(this).find(".ianjie_in_shop").css("display","none")
		});
	});
});

//城市数据导入
//拼音
$("#city_list_pin").load("pad.html",function(){
	//数据加载并且填充
	$.getJSON("../json/cityList.json",function(data){
		var htmlStr1 = baidu.template("cityIn",data);
		$("#city_list_hot").html(htmlStr1);
		var htmlStr = baidu.template("cityInP",data);
		$("#city_list_pin").html(htmlStr);
		//城市变换
		$(".show_city_all").on("click",function(){
			$("#city_name").html($(this).html());
			$(".seacth_left_one>span:eq(0)").html($(this).html());
			//获取json文件中的code数据
			var temp="";
			for(var i in data.result.citylist){
				for(var n in data.result.citylist[i]){
					if($(this).text()==data.result.citylist[i][n].name){
						temp = (data.result.citylist[i])[n].code;
						};
					};
					//执行回调函数
					sendJson(temp,"jsonpCallback");
				};
			});
		//设置事件 拼音查找 样式改变
		$(".pinyin_a").on("click",function(){
			 $(".pinyin_a").removeClass("back");
			 $(".pinyin_a").css("borderBottom","");
			 $(".pinyin_a").css("color","");
			 for(var n in $(".pin_up")){
				$(this).addClass("back");
				$(this).css("border","none");
				$(this).css("color","#ff5500");
			}
			//运用索引来将两个独立的元素联系在一起
			$(".pin_up").hide();
			$(".pin_up").eq($(this).index()).show();
		});
	});
});

//将code数据送到jsonp中的网址中，调用jsonp的数据
//请求发送函数
function sendJson(temp,callbackName){
	//创建一个标签
	var tag = document.createElement("script");
	//添加src属性
	tag.src = "http://bang.360.cn/aj/get_area/?citycode="+temp+"&callback="+callbackName;
	document.body.appendChild(tag);
};
//回调函数 并且将数据填入
function jsonpCallback(data){
	//数据写入到html中
	var data = data;
	$(".city_list1").load("pad.html",function(){
		var htmlStr = baidu.template("show_city_change",data);
		$(".city_list1").html(htmlStr);
	});
};
//初始状态
sendJson("shen_yang","jsonpCallback");

//雪花调用
$(function(){
	$.fn.snow({ 
		minSize: 5,		//雪花的最小尺寸
		maxSize: 50, 	//雪花的最大尺寸
		newOn: 300		//雪花出现的频率 这个数值越小雪花越多
	});
});
