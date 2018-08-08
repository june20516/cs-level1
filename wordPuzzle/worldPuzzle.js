quest = {};
quest.arr = [];
quest.take = document.getElementById('text').innerHTML; //텍스트 가져오기
quest.push = function () { //배열에 넣기
    this.arr = this.take.split('');
}
quest.button = function () { //배열을 버튼으로 만들기
    var x = document.getElementById('wordbutton')
    x.innerHTML = ''; //초기화
    for (i = 0; i < this.arr.length; i++) {
        var btn = document.createElement('button');
        btn.innerHTML = this.arr[i];
        x.appendChild(btn);
    }
}

quest.push();
quest.button();


control = {};
//뒤집기 동작
control.swap = function (event) {
    for (i = quest.take.length-1; i >= 0; i--) {
        quest.arr.push(quest.arr[i]);
    }
    quest.arr.splice(0,quest.take.length);
    console.log(quest.arr);
    quest.button();
}


//밀어내기 동작
control.push = function (event) {
    var a = quest.arr.pop();
    quest.arr.unshift(a);
    console.log(quest.arr);
    quest.button();
}

var check = function (event) {
    var x = document.getElementById('result');
    var answer = quest.arr.join('');
    if (quest.take === answer) {
        x.innerHTML = '일치합니다 ! '
    } else {
        x.innerHTML = '일치하지 않습니다.'
    };
}