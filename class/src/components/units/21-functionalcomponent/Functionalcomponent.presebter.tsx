interface IProps {
  count: number;
  school: String;
}

export default function FunctionalcomponentUI(aaa: IProps) {
  return (
    <>
      <div>컴포넌트 프리젠터 입니다.</div>
      <div>{aaa.count}</div>
      <div>{aaa.school}</div>
    </>
  );
}
