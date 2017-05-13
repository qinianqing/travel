var mylis = document.getElementById("chujingyou-l").getElementsByTagName("li");
var mydivs = document.getElementById("chujingyou-l").getElementsByTagName("div");

for (var i = 0; i < mylis.length; i++) {
    mylis[i].index = i;
    mylis[i].onmouseover = function () {
        mylis[this].className = "cur";
    }
}