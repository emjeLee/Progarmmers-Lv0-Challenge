// 배열 두배 만들기
function solution(numbers) {
    const answer = [];
    for(let i=0; i<numbers.length; i++){
        answer.push(numbers[i] * 2)
    }
    return answer
}

// for문을 돌며 i번째 값에 2를 곱해준다
// numbers[i] 에 곱한 값을 넣는다.