// 짝수는 싫어요
function solution(n) {
    const answer = [];
    for(let i=1; i<=n; i++){
        if(i % 2 !== 0){
            answer.push(i)
        }
    }
    return answer;
}