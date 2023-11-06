document.addEventListener("DOMContentLoaded", () => {

    // 1. 버튼요소와 이미지 요소 가져오기
    // 2. 버튼 클릭 이벤트 처리 하기
    // 3. 랜덤 수 생성
    // 4. 생성된 난수에 해당하는 이미지 보이기

    // 1. 버튼 요소와 이미지 요소 가져오기
    const bt = document.querySelector("#msg1 > button");
    const img = document.querySelector("#divBtn > img");

    // 2. 버튼 클릭시 이벤트 처리
    bt.addEventListener("click", () => {
        // 3. 난수 생성 (0~5에서 1~6의 정수로 바꾸는 것까지)
        let n = Math.floor(Math.random() * 6) + 1;
        console.log("n", n);

        // 4. 생성된 난수에 해당하는 이미지 보이기
        img.setAttribute("src", `./images/${n}.png`)

    });

});