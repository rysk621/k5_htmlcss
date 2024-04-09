// 일일 박스오피스 데이터 가져오기
const getBoxOffice = (dt, tbDiv, gubun)=>{
    let apiKey = "f5eef3421c602c6cb7ea224104795888";
    let url = `https://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=${apiKey}&targetDt=${dt}`;
    if (gubun == '2') url = url + "&multiMovieYn=Y"
    else if (gubun == '3') url = url + "&multiMovieYn=N"
    let boxList;
    let tags = `<table>
                    <tr>
                        <th>순위</th>
                        <th>제목</th>
                        <th>개봉일</th>
                        <th>매출액</th>
                        <th>관객수</th>
                    </tr>`;

    fetch(url) //fetch에 url 주소 바로 넣어도 상관없지만 되도록 변수를 잡는 것이 좋다.
    // callback function을 then method에 넣는다.(then chaining) resp 변수는 소괄호에서 
    // declare, 사용가능. 이렇게 가지고 온 raw data(resp)를 json type으로 변환해야함. 변환한 값 반환하려면 {return } 필요
    .then(resp=>{return resp.json()})
    .then((data)=>{
        boxList = data.boxOfficeResult.dailyBoxOfficeList;

        // array의 item을 가지고 오는 method: map() method / forEach / for-of loop 사용가능.
        // object 형식으로 console에 저장, key:value dictionary 형식(json;JavaScript Object Notation)으로 보임.
        // boxList.map(item => {
        //     // console.log(item.rank, item.movieNm, item.openDt, item.salesAmt, item.audiCnt)
        //     tags = tags + `<tr>`;
        //     tags = tags + `<td class="sp1">${item.rank}</td>`;
        //     tags = tags + `<td class="sp2">${item.movieNm}</td>`;
        //     tags = tags + `<td class="sp1">${item.openDt}</td>`;
        //     tags = tags + `<td class="sp3">${parseInt(item.salesAmt).toLocaleString('ko-KR')}</td>`;
        //     tags = tags + `<td class="sp3">${parseInt(item.audiCnt).toLocaleString('ko-KR')}</td>`;
        //     tags = tags + `</tr>`;
        // });

        // map() method로 boxList의 item n개에 대해 n번 수행
        let trs = boxList.map(item =>
            `<tr>
            <td class="sp1">${item.rank}</td>
            <td class="sp2">${item.movieNm}</td>
            <td class="sp1">${item.openDt}</td>
            <td class="sp3">${parseInt(item.salesAmt).toLocaleString('ko-KR')}</td>
            <td class="sp3">${parseInt(item.audiCnt).toLocaleString('ko-KR')}</td>
            </tr>`
        );

        trs = trs.join('')
        
        tags = tags + trs + `</table>`;
        tbDiv.innerHTML = tags;
        console.log(boxList)

    })
};

document.addEventListener("DOMContentLoaded", ()=>{
    // const inpDt = document.querySelector("#dt"); : bt.addEventListener method에서 변수로 처리해서 해당 const는 필요없게 됨.
    const tbDiv = document.querySelector("#tbDiv");
    const bt = document.querySelector("#bt");

    // inpDt.addEventListener("change", (e)=>{
    //     e.preventDefault();

    //     // YYYYMMDD 형식으로 변경
    //     const dt = e.target.value.replaceAll('-', '');
    //     // getBoxOffice(dt, tbDiv);
    // })

    // 조회(❓) 버튼
    bt.addEventListener("click", (e)=>{
        e.preventDefault();
        const dt = inForm.dt.value.replaceAll('-', '')
        const gubun = inForm.gubun.value;

        if (dt === '' || dt === undefined){
            alert('날짜를 선택해주세요.');
            return;
        }

        getBoxOffice(dt, tbDiv, gubun)
    })
})
