// 분수의 덧셈
function solution(denum1, num1, denum2, num2) {
    let answer = []
    const denum = (denum1 * num2) + (denum2 * num1)
    const num = num1 * num2;
    
    let minNum;
    if(denum >= num){
        minNum = num;
    }
    if(denum <= num){
        minNum = denum;
    }
    
    while(true){
        if(denum % minNum === 0 && num % minNum ===0){
            return [denum / minNum, num / minNum]
        }
        minNum -= 1;
    }
}

// 1. 분수를 더해준다.
// 2. 분모분자를 최소공약수로 나누어준다.
// 2-1. 분모분자 중 작은수로 나누어준다.
// 2-2. 나머지가 0이 될때까지 1씩 줄이며 나눈다.