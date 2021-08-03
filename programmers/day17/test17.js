// 나누어 떨어지는 숫자 배열
function solution(arr, divisor) {
  let answer = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor) answer.push(arr[i]);
  }

  if (answer.length === 0) {
    // 데이터가 아무것도 없는 경우
    answer.push(-1);
  } else {
    // 데이터가 있는 경우
    // 오름차순으로 정렬을 해줘야 한다.
    answer.sort(function (a, b) {
      return a - b;
    });
  }
  return answer;
}

// 자연수 뒤집어 배열로 만들기
function solution(n) {
  // let answer = [];

  const answer = n
    .toString()
    .split("")
    .reverse()
    .map((el) => {
      return Number(el);
    });

  //     for(let i = n.length - 1; i >= 0; i = i - 1)
  //         answer.push(Nember(n[i]))
  //     }

  return answer;
}
