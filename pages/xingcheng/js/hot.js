$(".main ul li:first").clone().appendTo(".main ul");

var nowrow = 0; //信号量

function rightButFunc() {
    if (nowrow < 3) {
        nowrow++;
        $(".main ul").animate({"top": -25 * nowrow}, 600);
    } else {
        nowrow = 0
        $(".main ul").animate({"top": -25 * 4}, 600, function () {
            $(this).css({'top': 0});
        });
    }
}

var timer = setInterval(rightButFunc, 2000);

$(".main").mouseenter(function () {
    clearInterval(timer);
});

$(".main").mouseleave(function () {
    timer = setInterval(rightButFunc, 2000);
});