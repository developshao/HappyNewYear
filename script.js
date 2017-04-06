var music = document.getElementById("music");
var audio = document.getElementsByTagName("audio")[0];
var page1 = document.getElementById("page1");
var page2 = document.getElementById("page2");
var page3 = document.getElementById("page3");
//音乐放完停止音乐
audio.addEventListener("ended",function (e) {
	
},false);
//点击图片停止音乐
//music.onclick=function () {
//	if(audio.paused){
//		audio.play();
//		this.style.animationPlayState="running";兼容性问题，安卓低版本不支持，IOS只支持iphone6Plus
//	    this.setAttribute("class","play");//唯一不足的是每次暂停都会从新开始转
//	}else{
//		audio.pause();
//		this.style.animationPlayState="paused";
//		this.setAttribute("class","");
//	}
//	
//}

music.addEventListener("touchstart",function (e) {
	if(audio.paused){
		audio.play();
//		this.style.animationPlayState="running";兼容性问题，安卓低版本不支持，IOS只支持iphone6Plus
	    this.setAttribute("class","play");//唯一不足的是每次暂停都会从新开始转
	}else{
		audio.pause();
//		this.style.animationPlayState="paused";
		this.setAttribute("class","");
	}
},false);

//点击屏幕开启好运2017
page1.addEventListener("touchstart",function (e) {
	page1.style.display="none";
	page2.style.display="block";
	page3.style.display="block";
	page3.style.top="100%";
	
	setTimeout(function () {
		page2.setAttribute("class","page fadeOut");
		page3.setAttribute("class","page fadeIn");
	},5500);	
},false);

