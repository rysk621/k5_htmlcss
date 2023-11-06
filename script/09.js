document.addEventListener("DOMContentLoaded", () => {
    const txt = document.getElementById('txt')

    txt.addEventListener('change', (e)=>{
        console.log(e.target.value);
        // 확인버튼 누르면 임의의 수를 생성해야 함. 단 매번 누를 때마다 바뀌면 안된다.
    })
    
});