// 하샤드 수
function solution(x) {
  var answer = true;

  x = x.toString();
  let sum = 0; // 총 합을 담아주는 변수
  for (var i = 0; i < x.length; i++) {
    sum = sum + Number(x[i]);
  }
  return x % sum === 0;
}

// 폰켓몬
function solution(nums) {
  var pocket = [];
  nums.filter((monster) => {
    return pocket.includes(monster) === false && pocket.length < nums.length / 2
      ? pocket.push(monster)
      : null;
  });
  return pocket.length;
}
