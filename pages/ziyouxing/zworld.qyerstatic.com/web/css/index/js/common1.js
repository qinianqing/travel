/**
 * Created by win7 on 2016/9/3.
 */
function my$(id) {
    return document.getElementById(id);
}
//�����ĺ���
function animate(element,target) {
    clearInterval(element.timeId);
    //��ʱ��
    element.timeId=setInterval(function () {
        //��ȡ���Ŀ��λ��
        //var target=400;
        //��ȡ��ĵ�ǰλ��
        var current=element.offsetLeft;
        //��ÿ���ƶ���������---ÿ���ƶ��Ĳ���
        var step=9;
        step=current<target?step:-step;
        current=current+step;
        //�����ǰλ��С����ÿ���ƶ��Ĳ���,��ô��֤�����Ͼ͵���Ŀ��λ��
        //��ʱ���ƶ�һ�ξͳ�����Ŀ���λ��,����,ֱ�ӰѼ�ʱ����վͿ�����,Ȼ�����õ�ǰ��λ�þ���Ŀ��λ��,����ͼ����ƶ�
        if(Math.abs(target-current)<Math.abs(step)){
            clearInterval(element.timeId);
            element.style.left=target+"px";
        }else{
            element.style.left=current+"px";
        }
    },5);
}
