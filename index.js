var btn = document.querySelector("#submit")
var word = document.querySelector("#major");
// 给按钮添加点击效果

btn.onclick = function () {
    // 获取输入框的值
    var v = word.value;
    // console.log(v)
    if (v !== '') {
        if (v >= 0 && v <= 100) {
            if (v < 60) {
                var a = '种地';
            } else if (v < 70) {
                var a = '电专';
            } else if (v < 80) {
                var a = '北大';
            } else if (v <= 100) {
                var a = '清华';
            }
             console.log(a);
        } else {
            alert('输入不合法')
        }
    } else {
        alert('不能为空')
    }
    console.log(fire());
}