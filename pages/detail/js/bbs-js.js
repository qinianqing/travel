$(function () {

    // 下拉列表
    var btnSele = $("#btn2");
    var selectItem = $("#select-item");
    btnSele.mouseenter(function () {
        //selectItem.css("display","block");
        $(selectItem).fadeToggle(200);
    }).mouseleave(function () {
        selectItem.css("display","none");
    });
    var lis = selectItem.find("a");
    lis.mouseenter(function () {
       $(this).css("backgroundColor","#1C95DD");
    }).mouseout(function(){
        $(this).css("backgroundColor","#F4F3F2");
    });
    // 上方轮播图
    var banner = $("#banner");
    var center = banner.children(".center");
    var bannerPic = center.children("img");
    var rightTitle = bannerPic.siblings("div").children(".title");
    var selectPics = rightTitle.next().children("img");
    var bannerIs = rightTitle.next().children("i");
    var bannerHeadPic = rightTitle.siblings("img");
    var bannerText = {
        "txt1": "你去过天鹅湖么？但你一定看过天鹅舞吧，超级无敌的舞舞舞舞蹈。",
        "txt2": "黑马自驾游，您值得拥有，老师带你120迈开车，保准你不会迷路。",
        "txt3": "幽灵这个一个轮播文本，一个轮播文本，一个轮播文本，一个轮播文本，。",
        "txt4": "大雪山，可以化学，看开心下师带你120迈开师带你120迈开师带你120迈开。",
        "txt5": "较选民较选民阿斯打扫打扫的阿斯打扫打扫的大苏打阿斯打扫打扫打扫打扫。"
    };
    // banner
    selectPics.mouseenter(function () {
        // 定义经过标记，只要如果一次，下次就不会执行
        $(this).bannerPicFlag = false;
        if (!$(this).bannerPicFlag) {
            // 小图片边框
            $(this).addClass("select-current").siblings().removeClass("select-current");
            // 小图片三角区域
            $(bannerIs.get(4 - $(this).index())).css("display", "block")
                .css("left", (19 + 56 * (4 - $(this).index())))
                .css("top", -10)
                .siblings("i").css("display", "none");
            // 下角标
            var index = $(this).index();
            index = selectPics.length - index;
            // 设置文本
            rightTitle.text(bannerText["txt" + index]);
            // 头像路径切换
            bannerHeadPic.attr("src", "BBS-imgs/h" + index + ".jpg");
            bannerHeadPic.stop(true, true).animate({"opacity": 0}, 500)
                .stop(true, true).animate({"opacity": 1}, 500);
            // 中心图片切换
            bannerPic[0].src = "BBS-imgs/s" + index + ".jpg";
            banner.css("background-image", "url(BBS-imgs/sbg" + index + ".jpg)");
            // 中心图片动画
            bannerPic.stop(true, true).animate({"opacity": 0}, 500)
                .stop(true, true).animate({"opacity": 1}, 500);
        }
    });
    selectPics.mouseleave(function () {
        // 重置，防止鼠标移动触发多事件
        $(this).bannerPicFlag = true;
    });

    // 评论区
    var comments = $("#con-left").children(".comment");
    var closeComments = comments.children(".close");
    closeComments.click(function () {
        $(this).parent().slideUp(1000);
    });





    // 推荐消息轮播
    var ul = $("#infos-ul");
    // 轮播动画
    ul.animate({"top":-290*5},290*5*10,"linear");
    // 判断距离，超出重新开始动画
    setInterval(function(){
        var top = parseInt(ul.css("top"));
        if(top<=(-290*5)){
            ul.css("top","0");
            ul.stop().animate({"top":-290*5},290*5*10,"linear");
        }
    },100);
    // 鼠标进入停止动画
    ul.mouseenter(function () {
        ul.stop();
    });
    // 鼠标离开继续执行动画
    ul.mouseleave(function () {
        var top = parseInt(ul.css("top"));
        console.log((290 * 5 - Math.abs(top)) * 10);
        ul.stop().animate({"top":-290*5},(290*5-Math.abs(top))*10,"linear");
    });

    //返回顶部案例
    $(window).scroll(function(){
        var scrollHeight=$(this).scrollTop();
        if(scrollHeight>100){
            $("#returnTop").fadeIn(300);
        }
        else{
            $("#returnTop").fadeOut(300);
        }
    });
    $('#returnTop').click(function () {
        $('html,body').animate({scrollTop: '0px'}, 1000);
    });






    // 注册穷游
    $("#zc").mouseenter(function () {
       $(this).css("background","#147850");
    }).mouseleave(function () {
        $(this).css("background","");
    });
});
