// 제일 작은 수 제거하기

function solution(arr) {
  // let answer = [];

  //          Math.min.apply(null. arr)
  const min = Math.min(...arr);
  //                       (num => { return num > min } ) 아래와 같음
  const result = arr.filter((num) => num > min);
  return result.length === 0 ? [-1] : result;

  //     const min = Math.min.apply(null, arr)
  //     arr.splice(arr.indexOf(min))

  //     return arr.length === 0 ? [-1]: arr;
}
