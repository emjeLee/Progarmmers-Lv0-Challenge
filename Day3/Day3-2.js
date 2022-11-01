// 중앙값 구하기
// https://school.programmers.co.kr/learn/courses/30/lessons/120811

function solution(array) {
    let newArray = [];
    let arrayCount = 0;
    while (arrayCount < array.length) {
        let minNumber = 1000;

        let count = 0;
        while (count < array.length) {
            if (minNumber > array[count]) {
                minNumber = array[count];
            }
            count += 1;
        }
        newArray.push(minNumber);

        let count2 = 0;
        while (count2 < array.length) {
            if (minNumber === array[count2]) {
                array[count2] = 1000;
                break;
            }
            count2 += 1;
        }
        arrayCount += 1;
    }
    const center = Math.floor(array.length / 2);
    return newArray[center];
}

// 1.정렬
// 1-1 가장 작은 값을 찾는다.
// 1-2 값을 찾으면 새 배열에 넣는다.
// 1-3 찾은값의 위치에 큰 값을 넣는다.
// 1-4 배열의 길이만큼 1-1로 돌아가 반복한다.

// 2. 가운데 값 구하기
// 2-1 배열의 길이를 반으로 나눈뒤 소수점을 버린 값의 인덱스로 값 출력
