/**
 * Created by win7 on 2016/9/3.
 */
function my$(id) {
    return document.getElementById(id);
}
//动画的函数
function animate(element,target) {
    clearInterval(element.timeId);
    //计时器
    element.timeId=setInterval(function () {
        //获取层的目标位置
        //var target=400;
        //获取层的当前位置
        var current=element.offsetLeft;
        //层每次移动多少像素---每次移动的步数
        var step=9;
        step=current<target?step:-step;
        current=current+step;
        //如果当前位置小于了每次移动的步数,那么就证明马上就到了目标位置
        //此时再移动一次就超过了目标的位置,所以,直接把计时器清空就可以了,然后设置当前的位置就是目标位置,否则就继续移动
        if(Math.abs(target-current)<Math.abs(step)){
            clearInterval(element.timeId);
            element.style.left=target+"px";
        }else{
            element.style.left=current+"px";
        }
    },5);
}
