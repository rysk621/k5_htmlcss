// 함수만들기 연습
// function hello(n){
//     alert("Hello! Button"+n);
// }
// 자바스크립트에서 변수선언 안해도 실행되지만 할 것. const or let 두가지만 있음. (let은 바꿀 수 있다.) 변수에 함수를 할당할 수도 있다(same as python)
// 익명 함수 hello: const hello = () => {};
const hello = (n) => {
    // if (n < 3) {
    //     //  alert("Hello! Button"+n)
    //     document.getElementById('msg1').innerHTML = "<h2>Hello! Button" + n + "</h2>";
    // } else { document.getElementById('msg2').innerHTML = "<h2>Button" + n + "</h2>"; }

    switch (n) {
        case 1: document.querySelector('#msg1').innerHTML = "<h2>Hello, Button" + n + "</h2>";
            break;
        case 2: document.querySelector('#msg1').innerHTML = "<h2>Hello, Button" + n + "</h2>";
            break;
        case 3: document.querySelector('#msg2').innerHTML = "<h2>안녕 버튼" + n + "</h2>";
            break;
        case 4: document.querySelector('#msg2').innerHTML = "<h2>안녕 버튼" + n + "</h2>";
            break;
    }

    // 백틱(`) 사용: 변수 값을 처리하는 방법
    let cnt;
    n <= 2 ? cnt = 1 : cnt = 2; //삼항 연산: if (n<=2) {cnt = 1;} else {cnt = 2;}
    console.log("cnt", cnt);
    document.querySelector(`#msg${cnt}`).innerHTML = "<h2>hello, button" + n + "</h2>";
}

// DOM 생성되고 난 다음 실행됨: addEv-Lis-("DOMC-L")
document.addEventListener("DOMContentLoaded", () => { /*callback function: ()=>{}*/
    const bt1 = document.createElement("Button");
    const bt1Text = document.createTextNode("버튼3을 눌러주세요");

    bt1.appendChild(bt1Text);
    bt1.setAttribute("id", "bt3");

    const bt2 = document.createElement("Button");
    const bt2Text = document.createTextNode("버튼4를 눌러주세요");

    bt2.appendChild(bt2Text);
    bt2.setAttribute("id", "bt4");

    document.getElementById('divbtn2').append(bt1);
    document.getElementById('divbtn2').append(bt2);

    //버튼 이벤트 달기
    document.getElementById('bt3').addEventListener("click", () => {
        hello(3);
    });
    bt2.addEventListener("click", () => { //31행,34행: id를 찾느냐 const로 만들어진 bt1 or bt2를 찾느냐 차이
        hello(4);
    });

    // document.getElementById('msg2').innerHTML = '안녕';
});

