const divShow = (d1,d2,isRandom) => {
    if(isRandom){
        d1.style.display = 'none';
        d2.style.display = 'flex';
    }else{
        d1.style.display = 'flex';
        d2.style.display = 'none';
    }
}

const showImg = (msgIn) => {
    const img1 = document.querySelector('#divImg > img');
    const msg = document.querySelector('#sec3 > h1');
    img1.setAttribute("src", `./images/${msgIn}.png`);
    msg.innerHTML = msgIn;
}

document.addEventListener("DOMContentLoaded", () => {
    //변수선언
    let randomNum;
    let userNum;

    //img
    //const img1 = document.querySelector('#divImg > img');
    //메시지 영역
    const msg = document.querySelector('#sec3 > h1');

    //랜덤 영역
    const btDiv1 = document.getElementById("btDiv1");
    const bt1 = document.getElementById("bt1");
    
    //입력 영역
    const txt = document.querySelector('#txt');
    const btDiv2 = document.querySelector("#btDiv2");
    const bt2 = document.querySelector('#bt2');

    //random flag
    divShow(btDiv1,btDiv2,false); //if false

    //입력하는 txt
    txt.addEventListener("change",(e)=>{
        console.log(e.target.value);
        userNum = parseInt(e.target.value); //txt box에 입력한 value를 const에 저장하는 코드. 입력받은 변수는 문자열이므로 문자열을 숫자로 바꿔서 저장하는 함수 parseInt method 이용.
    });

    //버튼처리
    bt1.addEventListener("click", (event)=>{
        event.preventDefault();
        //random number create: 1-100
        randomNum = Math.floor(Math.random()*100 + 1)
        console.log("bt1",randomNum);

        //입력영역 보이기
        divShow(btDiv1,btDiv2,true);
    });

    bt2.addEventListener("click", (e)=>{
        e.preventDefault(); //default action을 막아주는 함수: preventDefault();
        console.log("bt2", userNum);
        
        if(userNum === randomNum){
            showImg("good");
            txt.value = '';
        }else if(userNum > randomNum){
            showImg("down");
            //img1.setAttribute("src",'./images/down.png');
            //msg.innerHTML = "Down";
        }else if(userNum < randomNum){
            showImg("up");
            //img1.setAttribute("src", './images/up.png')
            //msg.innerHTML = "Up";
        }else{
            msg.innerHTML = "숫자를 입력하세요.";
        }
    });
});
