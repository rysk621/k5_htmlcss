document.addEventListener("DOMContentLoaded", ()=>{
    const bt = document.querySelector("#d2 > button");
    const d1 = document.querySelector("#d1");
    let arr = [];

    bt.addEventListener("click", (e)=>{
        e.preventDefault();

        // 배열 초기화
        arr.length = 0;
        // for (let i = 0; i<7; i++){
        //     let n = Math.floor(Math.random() * 45) + 1; //1~45까지의 정수
        //     arr.push(n);
        // }

        while (arr.length < 7){
            let n = Math.floor(Math.random() * 45) + 1; //1~45까지의 정수

            if (!arr.includes(n)) arr.push(n);
        }

        let tags = '';
        tags = arr.map((item, idx) => idx == 5 ?
        `<span class='sp' id='sp${Math.floor(parseInt(item) / 10)}'>
            ${item}
        </span>
        <span id='spp'> + </span>`
        :
        `<span class='sp' id='sp${Math.floor(parseInt(item) / 10)}'>
            ${item}
        </span>`
        )

        d1.innerHTML = tags.join('');

        // d1.innerHTML = arr.join(' ');
        // console.log(bt.innerHTML);
    });
})