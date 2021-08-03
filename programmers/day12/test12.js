// 문자열 내 p와 y의 개수
function solution(s) {
  let p = 0,
    y = 0;

  s = s.toLowerCase();

  for (let i = 0; i < s.length; i++) {
    if (s[i] === "p") {
      p++;
    } else if (s[i] === "y") {
      y++;
    }
  }

  return p === y ? true : false;
}

// 콜라츠 추측
function solution(num) {
  var answer = 0;
  while (num !== 1) {
    if (answer > 500) {
      return -1;
    }
    num % 2 === 0 ? (num = num / 2) : (num = num * 3 + 1);
    answer++;
  }
  return answer;
}
