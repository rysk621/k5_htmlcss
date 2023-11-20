/*
1. 폭탄 섞기
- 배열 이용, 배열의 1 위치가 폭탄의 위치
- 폭탄 섞기 버튼 누르면 1의 위치를 섞는 method 작성
+ 작성시 폭탄이 섞였는지 isShuffle flag 변수를 활용

2. 박스 클릭 처리
- 폭탄이 섞여야 박스가 클릭되도록 설정(isShuffle == true)
- 이미 이미지가 있으면 더이상 이미지를 표시하지 않음
- 폭탄 이미지가 나오면 더이상 클릭이 되지 않고 폭탄을 섞기
- 폭탄섞기 버튼 활성화시 전체화면 초기화
- 하트 이미지가 나오면 현재 나타난 하트의 개수를 기억하기
- 하트 개수가 8개가 되면 마지막 박스에도 하트를 나타내고 종료
*/

let arr = [0,0,0,0,0,0,0,0,1];
let isShuffle = false;
const init = (box, msg) => { //초기화 함수를 작성해야 함
    msg.innerHTML = '';
    box.forEach(element => { //for of 사용 가능
        element.innerHTML = element.getAttribute("id").slice(-1);
    });
    cnt = 0;
}
let cnt = 0; //heart 개수

document.addEventListener("DOMContentLoaded", ()=>{
    const bt = document.querySelector("#bt");
    const box = document.querySelectorAll('.box');
    const msg = document.querySelector('#msg');

    bt.addEventListener("click", ()=>{
        if (!isShuffle){
            init(box, msg);
            console.log("변경 전", arr);
            
            // array shuffle
            arr = arr.sort(()=>Math.random() - 0.5);
            /*
            배열 sort(): 알파벳 정렬
            sort((a,b) => a - b): 숫자 오름차순
            sort((a,b) => b - a): 숫자 내림차순
            */
            console.log("변경 후",arr);
            isShuffle = true;
            msg.innerHTML = "";
        }
    })

    for(let b of box){
        b.addEventListener("click", ()=>{
            if (!isShuffle){
                msg.innerHTML = "<h2>폭탄을 섞어주세요</h2>";
                return;
            }

            if (isNaN(b.innerHTML)){
                console.log("이미지 있음");
                return;
            }

            //현재 박스를 기준으로 배열의 첨자를 구함
            let idx = b.getAttribute("id").slice(-1) - 1; //arr의 index로 만들어 주기 위해 -1을 합니다.
            if (arr[idx] === 0){
                b.innerHTML = '<img src="./images/heart.png">';
                cnt++;
                console.log("cnt = "+cnt);
                if (cnt == 8){
                    let idx1 = arr.indexOf(1) + 1; //box의 번호 나타내기 위해 +1 한당
                    console.log("idx1 = "+idx1);
                    document.querySelector(`#box${idx1}`).innerHTML = '<img src="./images/heart.png">';
                    isShuffle = false;
                    msg.innerHTML = '<h2>성공</h2>';
                }
            }
            else {
                b.innerHTML = '<img src="./images/boom.png">';
                isShuffle = false;
                msg.innerHTML = '<h2>실패</h2>';
            }
            // console.log(idx);
        })
    }
})