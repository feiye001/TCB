//hover事件处理
	//获取a的集合
	var hoveShow = document.getElementsByClassName('hoveShow');
	var displayNo = document.getElementsByClassName("displayNo")[0];
	//获取 显示的div模块
	var disNone = document.getElementsByClassName("disNone")[0];
	var disNone1 = document.getElementsByClassName("disNone1")[0];
	var disNone2 = document.getElementsByClassName("disNone2")[0];
	var disNone3 = document.getElementsByClassName("disNone3")[0];
	//箭头跟随
	var spanSet = document.getElementById('spanSet');
	for(var i = 0;i<hoveShow.length;i++){
		hoveShow[i].index=i;
		hoveShow[0].onmouseover = function(){
			displayNo.style.display="block";
			disNone.style.display="block";
			disNone1.style.display="none";
			disNone2.style.display="none";
			disNone3.style.display="none";
			spanSet.style.display ="block";
			spanSet.style.top =36+"px";

		}
		hoveShow[1].onmouseover = function(){
			displayNo.style.display="block";
			disNone.style.display="none";
			disNone1.style.display="block";
			disNone2.style.display="none";
			disNone3.style.display="none";
			spanSet.style.display ="block";
			spanSet.style.top =121+"px";
		}
		hoveShow[2].onmouseover = function(){
			displayNo.style.display="block";
			disNone.style.display="none";
			disNone1.style.display="none";
			disNone2.style.display="block";
			disNone3.style.display="none";
			spanSet.style.display ="block";
			spanSet.style.top =206+"px";
		}
		hoveShow[3].onmouseover = function(){
			displayNo.style.display="block";
			disNone.style.display="none";
			disNone1.style.display="none";
			disNone2.style.display="none";
			disNone3.style.display="block";
			spanSet.style.display ="block";
			spanSet.style.top =291+"px";
		}
		displayNo.onmouseover = function(){
			displayNo.style.display="block";
			spanSet.style.display ="block";
		}
		displayNo.onmouseout = function(){
			displayNo.style.display = "none";
			spanSet.style.display ="none";
		}
		hoveShow[i].onmouseout = function(){
			displayNo.style.display = "none";
			spanSet.style.display ="none";
		}
	}



	//登录注册页面显示
	$("#deng_lu").on("click",function(){
		$("#zhe").css("display","block");
	});
	$("#x").on("click",function(){
		$("#zhe").css("display","none");
	});

	//注册页面显示与隐藏
	$("#zhu_ce").on("click",function(){
		$("#zhePhone").css("display","block");
	});


	$("#ponecl").on("click",function(){
		$("#zhePhone").css("display","none");
	});


	$("#mailx").on("click",function(){
		$("#zhemail").css("display","none");
	});


	//邮箱和手机互换事件
	$("#remail").on("click",function(){
		$("#zhePhone").css("display","none");
		$("#zhemail").css("display","block");
	});
	$("#you").on("click",function(){
		$("#zhePhone").css("display","block");
		$("#zhemail").css("display","none");
	});

	//地图出现与隐藏
	$("#nenIn").on("click",function(){
		$("#maps_zhe").css("display","block");
	});
	$("#close_map").on("click",function(){
		$("#maps_zhe").css("display","none");
	});
	//回到顶部
	$(".returnTop").hover(function(){
		$(this).css("background","url(../images/top.png) no-repeat 0 -75px");
	},function(){
		$(this).css("background","");
	});
	$(document).scroll(function(){
		$(".returnTop").css("display","block");
		if($(document).scrollTop()==0){
			$(".returnTop").css("display","none");
		}
	})


	//城市
	$("#top_bar").on("click",function(){
		$(".city").css("display","block");
		$(".city").css("left","115px");
		$(".city").css("top","26px");
	});
	//关闭
	$(".city_close").on("click",function(){
		$(".city").css("display","none");
	});
	//定位
	$(".seacth_left_one").on("click",function(){
		$(".city").css("display","block");
		$(".city").css("left","75px");
		$(".city").css("top","1485px");
	});
	//区县定位
	$(".seacth_left_two").on("click",function(){
		$(".city1").css("display","block");
	});
	$(".city_close1").on("click",function(){
		$(".city1").css("display","none");
	});
	

//创建地图对象
	var map = new AMap.Map("map_img",{
		resizeEnable: true,
        zoom:11,
        center: [123.4,41.8]
	});
	//语言设置
	map.setLang("zhe_cn");
	var scale = new AMap.Scale(),
	toolBar = new AMap.ToolBar(),
	overView = new AMap.OverView();
	//添加空尖到地图上
	map.addControl(scale);
	map.addControl(toolBar);
	map.addControl(overView);
	//标记店铺位置
	//获取店铺位置坐标
	$.getJSON("../json/shuju.json",function(data){
		for(var n in data.shop_data){
			var num = data.shop_data[n].map_latitude;
			var num1 = data.shop_data[n].map_longitude;
			
			var icon = new AMap.Icon({
				image:"../images/map.png",
    		});
			var mark1 = new AMap.Marker({
		     	map:map,
		     	position:[num1,num],
		     	icon: icon
    		});
		};
	});
	
	//轮播图
	var no = 0;
	var dis = 0;
	var divEle = document.querySelector(".lunboOut");
	var spanOn = $(".curcle");
	var le = $(".curcle").length;
	function changeImg(){
		no = setInterval(function(){
			var index = Math.floor(dis*(-1)/1200);
			if(index>=4){
				index=0;
			}
			changeStyle(index);
			if(dis%1200==0&&dis!=-4800){
				clearInterval(no);
				no=setTimeout(changeImg,1200);
			}
			divEle.style.marginLeft = dis+"px";
			dis-=20;
			if(dis<-3600){
				dis=0;
			}
		},10);	
	}

	function changeStyle(suoyin){
		$(spanOn).eq(suoyin).addClass("hov").siblings().removeClass("hov");
	}
	changeImg();
	for(var i=0;i<le;i++){
		spanOn[i].suoyin = i;
		spanOn[i].onmouseover=function(){
			clearInterval(no);
			changeStyle(this.suoyin);
			dis=this.suoyin*(-1200);
			divEle.style.marginLeft=dis+"px";
		}
		spanOn[i].onmouseout=function(){
			changeImg();
		}
	}
