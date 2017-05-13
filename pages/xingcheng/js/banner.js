//banner
var nowing = 0;
var $imglis = $(".banner .list0 li");
var $fadeCover = $(".fadeCover");
var fadeIntime = 500;
var fadeOutime = 800;
var $circle = $(".circle li");
var timer;

// 定义函数
function rightbtn() {
    // 先信号量的改变，
    nowing++;
    if (nowing > $imglis.length - 1) {
        nowing = 0;
    }
    // 再调用函数
    dong();
}
// 定时器
timer = setInterval(rightbtn, 2000)
$(".banner").mouseenter(function () {
    clearInterval(timer);
})
$(".banner").mouseleave(function () {
    clearInterval(timer);
    timer = setInterval(rightbtn, 2000);
})
// 点击小圆点事件
$circle.click(function () {
    nowing = $(this).index();
    dong();
})
function dong() {
    // 先让fadecover淡入，让全局变白
    $fadeCover.fadeIn(fadeIntime, function () {
        $imglis.eq(nowing).addClass('cur').siblings().removeClass('cur');
        $(this).fadeOut(fadeOutime);
    })
    $circle.eq(nowing).addClass("cur").siblings().removeClass("cur");
}
