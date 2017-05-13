var tutu = document.getElementById("tutu");
var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var tiaozhuan = document.getElementById("tiaozhuan");
var text1 = document.getElementById("text1");
var step = 5;

btn1.onclick = function () {
    step--
    if (step < 1) {//改信号量
        step = 9;
    }
    huantu();//调用函数

}
btn2.onclick = function () {
    step++
    if (step > 9) {
        step = 1;
    }
    huantu();
}
tiaozhuan.onclick = function () {
    linshi = parseInt(text1.value)
    if (linshi >= 1 && linshi <= 9) {
        step = linshi;
    }
    huantu();

}
function huantu() {
    tutu.src = "images/" + step + ".jpg"//自定义函数
}
