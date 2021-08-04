// 시저 암호

const lower = "abcdefghijklmnopqrstuvwxyz";
const upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

function solution(s, n) {
  //     let answer = '';
  const result = s.split("").map((str) => {
    if (str === " ") {
      return " "; // 또는 str
    }
    const text = lower.includes(str) === true ? lower : upper;
    let index = text.indesOf(str) + n;
    if (index >= text.length) {
      index = index = text.length;
    }

    return text[index];
  });
  return result.join("");

  //     for(let i = 0; i < s.length; i++) {
  //         if(s[i] === " ") {
  //             answer += " "
  //             // answer += s[i]
  //         } else {
  //             // 대소문자를 구분해서 사용할 문자열을 저장하는 상수
  //             const text = lower.includes(s[i]) === true ? lower : upper
  //             let index = text.indexOf(s[i]) + n;
  //             if(index >= text,length) {
  //                 index = index - text.length;
  //             }

  //             answer += text[index];

  // //             // 대소문자의 알파벳의 경우
  // //             let index = alphabet.indexOf(s[i]);
  // //             // 현재 알파벳이 소문자인지 대문자인지를 판별, 저장
  // //             const upper = index >= 26 ? true : false;
  // //             index += n;
  // //             //index = index + n;

  // //             if(upper === ture) {
  // //                 // 알파벳이 대문자인 경우
  // //                 index = index >= 52 ? index - (alphabet.length / 2) : index
  // //             } else {
  // //                 // 알바벳이 소문자인 경우
  // //                 index = index >= 26 ? index - (alphabet.length / 2) : index
  // //             }

  // //             answer += alphabet[index]
  //         }
  //     }
  //     return answer;
}
