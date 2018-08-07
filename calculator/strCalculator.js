var Box = document.getElementById('outbox');
            
            //숫자 입력
            ipt = {};
            ipt.ar = [];
            ipt.n1 = 0; //먼저 입력된 값. 초기에는 0
            ipt.n2 = 0; //나중 입력된 값. 초기에는 첫번째 누른 숫자.
            
            ipt.Num = function(a) { //나중 입력된 값을 배열로 입력받고 숫자로 바꿈.
                this.ar.push(a);
                this.n2 = Number(this.ar.join(''));
                opt.Num(this.n2);
                console.log("num2 : ", this.n2," , num1 : " ,this.n1);
            }

            ipt.Bs = function() {  //입력받은 숫자 지움
                this.ar.pop();
                this.n2 = Number(this.ar.join(''));
                opt.Num(this.n2);
            }

            //숫자 출력
            opt = {};
            opt.Num = function(a) {  //숫자를 박스에 출력
                Box.innerHTML = a;   
            }

            //숫자 계산
            cal = {};
            cal.opr1 = (''); //첫번째 연산자.
            cal.opr2 = (''); //이후 계산 연산자.
            cal.opin = true;
            cal.Next = function() {  //다음 값을 입력 받기 위한 배열 초기화.
                ipt.ar = [];
                this.opr1 = this.opr2;
            }
    
            cal.opt = function(a) {  //연산자를 입력하였을 때 작동하는 함수.   
                this.calcul(this.opr1); //1. 기존 계산을 완료,
                this.opr2 = a; //2. 연산자를 지금 눌러진 연산자로 변경.
                opt.Num(ipt.n1);  // 3. 박스에 결과 출력 
                console.log("opt : ",a,' , ', ipt.n1);
                this.Next ();
            }
    
            cal.calcul = function (opr) {
                switch (opr) {
                    case "+" : ipt.n1 += ipt.n2
                        break;
                    case "-" : ipt.n1 -= ipt.n2
                        break;
                    case "X" : ipt.n1 *= ipt.n2
                        break;
                    case "÷" : ipt.n1 /= ipt.n2
                        break;
                    case "=" : 
                        break;
                    default : ipt.n1 = ipt.n2
                }
            }

            cal.equal = function () {
                this.calcul(this.opr1);
                opt.Num(ipt.n1);
                this.opr1 = '=';
            }