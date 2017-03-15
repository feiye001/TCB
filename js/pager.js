/*
 *分页工具条初始化函数
 *
 *@param {string} {pageId}[页面分页工具栏外层容器标签ID]
 *@param {number} [currPage] [当前页]
 *@param {number} [totalPage] [总页数]
 *
 *@author lishenfei
 *@data 2017年1月11日
 *
*/
$(function(){
	pager("navlan_all",1,54);
});
function pager(pageId,currPage,totalPage){
	var frameHtml = '<a href="###">首页</a>'
	 				+'<a href="###">上一页</a>'
					+'<a href="###">下一页</a>'
	 				+'<a href="###">尾页</a>';
	//添加主体结构到指定工具条容器
	 $("#"+pageId).html(frameHtml).attr("currPage",currPage);
	 //开始页码
	 var startIndex = currPage-4 >= 1? currPage-4:1,
	 	pageStr="";
	 	pageNum = startIndex;
	 //循环拼接页面html
	 for(var n=0; n<10 && pageNum<=totalPage; n++){
	 	if(pageNum === currPage){
	 		pageStr += '<a href="###" class = "red">'+pageNum+'</a>';
	 	}else{
	 		pageStr += '<a href="###">'+pageNum+'</a>';
	 	}
	 	
	 	pageNum++;
	 }
	 //添加页面到页面
	 $("#"+pageId).find("a:eq(1)").after(pageStr);
	 //事件处理
	 $("#"+pageId).off("click","a").on("click","a",function(){
	 	var text = $(this).text();
	 	switch(text){
	 		case "上一页":
	 			pager(pageId,currPage-1,totalPage);
	 			break;
	 		case "下一页":
	 			pager(pageId,currPage+1,totalPage);
	 			break;
	 		case "首页":

	 			pager(pageId,1,totalPage);
	 			break;
	 		case "尾页":
	 			pager(pageId,totalPage,totalPage);
	 			break;
	 		default:
	 				pager(pageId,parseInt(text),totalPage);
	 			break;
	 	}	
	 });
}