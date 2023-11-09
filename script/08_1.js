// 버튼 처리
const handleBtClick = (comImg, meImg, me, msg) => {
    // 버튼이 클릭되었을 때의 함수 호출// 1. 버튼요소와 이미지 요소 가져오기
    // 2. 버튼 클릭 이벤트 처리 하기
    // 3. 랜덤 수 생성
    // 4. 생성된 난수에 해당하는 이미지 보이기

    // 1. 버튼 요소와 이미지 요소 가져오기
    const com = Math.floor(Math.random()*6) +1;
    console.log("com=", com, " me=", me)
    
    // 2. 주사위 이미지 변경
    comImg.setAttribute('src' , `./images/${com}.png`);
    meImg.setAttribute('src', `./images/${me}.png`);

    if (com === me) msg.innerHTML = '"무"';
    else if (com > me) msg.innerHTML = '"패"';
    else msg.innerHTML = '"승"';
    
    // 2. 버튼 클릭시 이벤트 처리
    bt.addEventListener("click", () => {
        // 3. 난수 생성 (0~5에서 1~6의 정수로 바꾸는 것까지)
        let n = Math.floor(Math.random() * 6) + 1;
        console.log("n", n);

        // 4. 생성된 난수에 해당하는 이미지 보이기
        img.setAttribute("src", `./images/${n}.png`)

    });
}


document.addEventListener("DOMContentLoaded", () => {
    const btn = document.querySelector("#msg1 > button");
    const meImg = document.querySelector("#meImg");
    const comImg = document.querySelector("#comImg")
    const bts = document.querySelectorAll("#divDice6 > button");
    const msg = document.querySelector("#sec3 > h1");

    // msg.innerHTML = "<p>안녕하세요.</p>";

    // const bt1 = document.querySelector("#bt1");
    // bt1.addEventListener("click", ()=>{
    //     console.log(bt1.getAttribute("id"));
    // });
    
    // const bt2 = document.querySelector("#bt2");
    // bt2.addEventListener("click", ()=>{
    //     console.log(bt2.innerHTML);
    // });
    
    // console.log(bts)
    // for(let i=0;i<bts.length;i++){
    //     console.log(bts[i]);
    // }

    // for in : object에 사용
    // for (let i in bts){
    //     console.log(i);
    // }

    // for each
    // bts.forEach(item => console.log(item))

    // bts.forEach((item) => {console.log(item)}) : 인수가 1개일 경우(item) 소괄호 생략 가능. return 생략한 한 문장으로 나타낼 수 있을 경우 중괄호 생략 가능.
    // bts.forEach((item, idx) => {console.log(item)}) : 등 인수가 2개일 경우에는 소괄호 반드시 작성해야 함.

    // for of
    console.log(bts)
    for (let bt of bts){
        bt.addEventListener("click", ()=>{
            const me = parseInt(bt.getAttribute("id").slice(-1));
            handleBtClick(comImg, meImg, me, msg);
            console.log(bt.getAttribute("id").slice(-1)); //id 호출, slice method 이용해 -1번째 문자 slicing
        });
    }
});