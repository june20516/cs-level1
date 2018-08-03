var Box = document.getElementById('outbox');
            
            //숫자 입력
            ipt = {};
            ipt.ar = [];
            ipt.N = 0;
            
            ipt.Num = function(a) {
                this.ar.push(a);
                opt.Num();
            }
            //숫자 출력
            opt = {};
            
            opt.Num = function() {
                ipt.N = ipt.ar.join('')*1;
                Box.innerHTML = ipt.N;
            };
            //숫자 계산
            cal = {};
            cal.opr = ("");
            cal.keep = 0;
            cal.Next = function() {
                ipt.ar = [];
                this.keep = ipt.N;
            }
    
            cal.opt = function(a) {
                this.Next ();
                this.opr = a;
            }
    
            cal.eqr = function (opr) {
                switch (opr) {
                    case "+" : ans = this.keep + ipt.N
                        break;
                    case "-" : ans = this.keep - ipt.N
                        break;
                    case "X" : ans = this.keep * ipt.N
                        break;
                    case "÷" : ans = this.keep / ipt.N
                        break;
                }
                Box.innerHTML = ans;
                ipt.N = ans;
            }