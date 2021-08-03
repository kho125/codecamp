import { DatePicker, Rate } from "antd";
import ReactPlayer from "react-player";
import styled from "@emotion/styled";

const Youtube = styled(ReactPlayer)`
  background-size: 500px 500px;
`;

const desc = ["terrible", "bad", "normal", "good", "wonderful"];

export default function Libraries2Page() {
  function onchangeStar(value: number) {
    console.log(value);
  }

  function onChange(data, dataString) {
    console.log(dataString);
  }

  return (
    <div>
      <DatePicker onChange={onChange} />
      <Rate tooltips={desc} onChange={onchangeStar} />
      <Youtube
        url="https://www.youtube.com/watch?v=HsZqLaEiuJo"
        playing={true}
        muted={true}
      />
    </div>
  );
}
