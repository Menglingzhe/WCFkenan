// JavaScript Document
//焦点图轮播
window.onload=function(){	
	//图片展示--滚动效果
	function picture(){
		//定义滚动速度
		var speed = 50;
		//获取<div id="imgbox">元素
		var imgbox = document.getElementById("imgbox");
		//复制一个<span>，用于无缝滚动
		imgbox.innerHTML += imgbox.innerHTML;
		//获取两个<span>元素
		var span = imgbox.getElementsByTagName("span");
		//启动定时器，调用滚动函数
		var timer1 = window.setInterval(marquee,speed);
		//鼠标移入时暂停滚动，移出时继续滚动
		imgbox.onmouseover = function(){
			clearInterval(timer1);
		}
		imgbox.onmouseout = function(){
			timer1=setInterval(marquee,speed);
		};
		//滚动函数
		function marquee(){
			//当第1个<span>被完全卷出时
			if(imgbox.scrollLeft > span[0].offsetWidth){
				//将被卷起的内容归0
				imgbox.scrollLeft = 0;
			}else{
				//否则向左滚动
				++imgbox.scrollLeft;
			}
			
		}
	}
	picture();
}
