var screenWidth = $(window).width(),
	screenHeight = $(window).height();

	$("#dbd_right").css("left",160+"px");
	var scrznw = parseInt($(".score_resultNow").css("top"));
	$(".average").css("top",scrznw+80+230-20+"px");
	var art = parseInt($(".average").css("top"));
	$(".swt").css("top",art+40+5+"px");
	var stp = parseInt($(".swt").css("top"));
	$(".join a").css("top",stp+20+10+"px");
	$(".paiHang").css("top",stp+35+41+"px");

//record_left(左半心坐标点集)、record_right(右半心坐标点集)、score_left(左半心评分)、score_right(右半心评分)
var url = location.search;
var Request = new Object();
if(url.indexOf("?")!=-1){
	var str = url.substr(1); //去掉?号
	var strs = str.split("&");
	for(var i=0;i<strs.length;i++){
		Request[strs[i].split("=")[0]]=unescape(strs[i].split("=")[1]);
	}
}
var record_left = Request["rl"].split(",");
var record_right = Request["rt"].split(",");
var score_left = parseInt(Request["fl"]);
var score_right = parseInt(Request["fr"]);
function drawLeft(record1){
	var cvs = document.getElementById("dbd_left");
	var ctx=cvs.getContext("2d");
	ctx.beginPath();
	ctx.lineWidth=2;
	ctx.strokeStyle="#000";
	ctx.moveTo(record1[0],record1[1]);
	for(var i = 2;i<record1.length;i+=2){
		ctx.lineTo(record1[i],record1[i+1]);
		ctx.stroke();
	}
}
drawLeft(record_left);
function drawRight(record2){
	var cvs = document.getElementById("dbd_right");
	var ctx=cvs.getContext("2d");
	ctx.beginPath();
	ctx.lineWidth=2;
	ctx.strokeStyle="#000";
	ctx.moveTo(record2[0],record2[1]);
	for(var i = 2;i<record2.length;i+=2){
		ctx.lineTo(record2[i],record2[i+1]);
		ctx.stroke();
	}
}
drawRight(record_right);
var average = (score_left+score_right)/2;
var atf = average.toFixed(0);
$(".average").html(atf+"<span>分<span>");//保留几位小数

if(atf<20){$(".swt").html("苍天！这是个异形么。。。");}
if(atf>=20&&atf<40){$(".swt").html("请二位多多练习天下无双剑法。。。");}
if(atf>=40&&atf<60){$(".swt").html("恭喜，离人生圆满还差五十步。。。");}
if(atf>=60&&atf<80){$(".swt").html("哇~~苹果正在向你俩靠近！！！");}
if(atf>=80&&atf<=100){$(".swt").html("牛X！你俩配合度太高了，完美合体！！");}