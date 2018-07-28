var readInput = function () {
    var ipt = document.getElementById('input1');
    console.log(ipt.value);
};


var btn2 = document.createElement('button');
btn2.onclick = readInput;
btn2.innerHTML = 'button2';
var test = document.getElementById('test');
test.appendChild(btn2);