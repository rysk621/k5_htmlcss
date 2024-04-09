document.addEventListener("DOMContentLoaded", ()=>{
    //입력 버튼
    const bt11 = document.querySelectorAll(".bt11");
    //삭제 버튼
    const bt12 = document.querySelectorAll(".bt12");

    const bt13 = document.querySelectorAll(".bt13");
    // readonly txt input
    const txt1 = document.querySelector("#txt1");

    // 배열(array) 선언 방법
    // let arr = new Array();
    let arr = [];

    // object 선언 (dictionary in python, .json type(key:value 형태로 데이터 전달받는 형식. JavaScript Object Notation))
    const emoji = {'사과':'🍎', '바나나': '🍌', '오렌지': '🍊', '수박': '🍉', '당근': '🥕', '오이': '🥒', '아보카도':'🥑', '브로콜리':'🥦',}; // if문 or switch-case문 안 써도 됨

    // 입력 처리
    for (let bt of bt11){
        bt.addEventListener("click", (e)=>{
            e.preventDefault();

            // let emoji ;
            // switch(bt.innerHTML.trim()){
            //     case '사과': emoji = '🍎'; break; 
            //     case '바나나': emoji = '🍌'; break;
            //     case '오렌지': emoji = '🍊'; break;
            //     case '수박': emoji = '🍉'; break;
            // }

            //조건식 대신 오브젝트로 처리
            arr.push(emoji[bt.innerHTML.trim()]);
            txt1.value = arr.join(' ');
        });
    };
    // 삭제 처리
    for (let bt of bt12){
        bt.addEventListener("click", (e)=>{
            e.preventDefault();

            // arr = arr.filter((item)=>{
            //     let key = bt.innerHTML.slice(0,-3); //replace method 사용할 수도 있음: " 삭제" 지우기
            //     return item != emoji[key];
            // });
            // txt1.value = arr.join(' ');
            
            // 위의 함수 축약형. 매개변수 1개일 경우 () 생략 가능. return도 생략함. let key 생략하고 key 자리에 bt.innerHTML 직접 전달. filter/map method 동일하게 적용 가능
            // map/filter method는 array에 사용한다.
            arr = arr.filter(item => item != emoji[bt.innerHTML.slice(0,-3)]);
            txt1.value = arr.join(' ');
        });
    }
    // 이모지 바꾸기
    for (let bt of bt13){
        bt.addEventListener("click", (e)=>{
            e.preventDefault();
            
            let key = bt.innerHTML;
            key = key.split(' → ')
            // console.log(emoji[key[0]], emoji[key[1]]);

            arr = arr.map(item=> item == emoji[key[0]] ? emoji[key[1]] : item); // return 문에 if문을 쓸 수 없어서 삼항연산자(ternary operator) 사용 --> return문 한줄만 있으니까 중괄호 생략, return문 생략
            txt1.value = arr.join(' ');
        });
    }
});