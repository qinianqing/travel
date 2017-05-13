//封装缓动动画
function animate(element, json, fn) {
    clearInterval(element.timeId);
    element.timeId = setInterval(function () {
        var flag = true;
        for (var attr in json) {
            if (attr == "opacity") {
                //获取当前位置
                var current = getAttrValue(element, attr) * 100;
                var target = json[attr] * 100;
                //每次移动步数
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[attr] = current / 100;
            } else if (attr == "zIndex") {
                element.style[attr] = json[attr];
            } else {
                //获取当前位置
                var current = parseInt(getAttrValue(element, attr)) || 0;
                var target = json[attr];
                //每次移动步数
                var step = (target - current) / 10;
                step = step > 0 ? Math.ceil(step) : Math.floor(step);
                current += step;
                element.style[attr] = current + "px";
            }
            if (current != target) {
                flag = false;
            }
        }
        if (flag) {
            clearInterval(element.timeId);
            if (fn) {
                fn();
            }
        }
    }, 10);
}

//获取指定对象格式和样式
function getAttrValue(element, attr) {
    return element.currentStyle ? element.currentStyle[attr] : window.getComputedStyle(element, null)[attr];
}
//waterfall开始
//var tabss = document.getElementById("tabss");
//var tabs_lis = tabss.getElementsByTagName("li");
//for (var i = 0; i < tabs_lis.length; i++) {
//    tabs_lis[i].onclick = function () {
//        console.log("1111");
//    }
//}
