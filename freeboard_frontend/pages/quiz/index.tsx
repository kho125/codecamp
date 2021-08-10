import { DatePicker, Rate } from "antd"; // 달력, 별
import ReactPlayer from "react-player"; // 유튜브
import styled from "@emotion/styled"; // 스타일
import { useState } from "react"; // state

const Youtube = styled(ReactPlayer)`
  width: 800px;
  height: 600px;
`;

const desc = ["1점", "2점", "3점", "4점", "5점"];

export default function Quiz3() {
  const [day, setDay] = useState("");
  const [point, setPoint] = useState("");
  function onchangeStar(value) {
    console.log(value);

    setPoint(value + "점");
  }

  function onChange(dataString) {
    setDay(dataString);
  }

  return (
    <div>
      <Rate tooltips={desc} onChange={onchangeStar} />
      <div>{point}</div>
      <DatePicker onChange={onChange} />
      <div>{day}</div>
      <Youtube
        url="https://www.youtube.com/watch?v=HsZqLaEiuJo"
        playing={true}
        muted={true}
      />
    </div>
  );
}
