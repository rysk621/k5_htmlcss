let s = 'Hello JavaScript!!';

console.log('문자열 = ', s)
console.log('문자열 길이 =', s.length) //공백포함 18자, 0-17
console.log('첫번째 문자 = ', s[0])
console.log('5문자 추출 = ', s.substring(0,5)) //bound, (길이) 개의 문자
console.log('5문자 추출 = ', s.slice(0,6)) //substring() method와 slice() method의 차이점 알기. (시작, _)
console.log('마지막 문자 추출 = ', s.slice(-1))

console.log('J의 위치 = ', s.indexOf('J'))

for (let c of s){
    console.log(c)
}

// s = 12;
console.log('숫자 확인 = ', isNaN(s)) //true = 숫자가 없음, false = 숫자가 있음. is Not a Number method
console.log('대문자 변환 = ', s.toUpperCase())
console.log('소문자 변환 = ', s.toLowerCase())

let result = '';
for (let c of s){
    if (c >= 'a' && c <= 'z') result = result + c.toUpperCase();
    else result = result + c.toLowerCase();
}
console.log('대소문자 변환 = ', result)

let x = '';
console.log('J의 위치 = ', s.indexOf('J')) //case는 구분 못하는듯
console.log('J의 위치 = ', x.indexOf('J')) //없으면 return -1
console.log('J의 유무 = ', s.includes('J'))
