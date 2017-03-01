/**
	* 完成课时
	* @example finishLesson(1);
	* @param {Number} lesson 课程
*/
var globalNumber = 'hello world';
function finishLesson(lesson) {
	
	alert("恭喜，你已经完成HBuilder入门课程。你可以用其它开发工具试试写这几十行代码，至少比HBuilder慢5倍！更重要的是，你很难找到这么爽的编码体验。");
}

function finishFun() {
	alert("hello");
}
function myfun1(a, b) {
	return a + b;
}
function my1 () {
	// 定义数组的方法: var a = new Array();       var a = new Array("1", "2", "3");
	var a = new Array();
	a = ["1", "2", "3"];
	var b = "0";
	for (i = 0; i < a.length; i++) {
		var c = a[i];
		b = b + c;
	}
	return b;
}
function my2 () {
	var a = new Array(14, 34, 564, 32, 72, 45, 14, 54);
	
	for (i = 0; i < a.length - 1; i++) {
		for (j = 0; j < a.length - i - 1; j++) {
			if (a[j] < a[j +1]) {
				var temp = a[j];
				a[j] = a[j + 1];
				a[j + 1] = temp;
			}
		}
	}
	return a;
}

function my3 () {
	var person = {firstName:"K", lastName:"B", id:"24"};
	return "科比英文名简称"+ person.firstName + person["lastName"] + ', 他穿' + person.id + "号球衣"
}

function my4 () {
	return globalNumber;
}
function my5 () {
	document.getElementById("showGlobal").innerHTML = globalNumber;
}

function mouseChangeString(elmnt,clr)
{
elmnt.style.color=clr;
}

