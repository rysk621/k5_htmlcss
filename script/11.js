document.addEventListener("DOMContentLoaded", ()=>{
    const txt1 = document.querySelector("#txt1");
    const txt2 = document.querySelector("#txt2");

    const bt1 = document.querySelector('#bt1');
    const bt2 = document.querySelector('#bt2');

    //회문 처리
    bt1.addEventListener("click", (e)=>{
        e.preventDefault();
        let result = '';

        for (let i = txt1.value.length -1; i >= 0; i--){
            result += txt1.value[i] ;
        }

        console.log(result)
        if (result == txt1.value) txt2.value = '회문입니다.';
        else txt2.value = '회문이 아닙니다.';

        if (result == '') txt2.value = '단어를 입력하세요.';
    });

    //합계 처리
    bt2.addEventListener("click", (e)=>{
        e.preventDefault();
        let sum = 0;

        // for (let i = 0; i<txt1.value.length; i++){
        //     if (!isNaN(parseInt(txt1.value[i]))) {
        //         sum += parseInt(txt1.value[i]);
        //     };
        // }
        // if (sum != 0) txt2.value = sum;

        for (let c of txt1.value) {
            if (!isNaN(c)) sum += parseInt(c);
        }
        console.log(sum);
        if(sum!=0) {txt2.value = sum;}
        else{txt2.value = "숫자가 없습니다.";}
    });
});