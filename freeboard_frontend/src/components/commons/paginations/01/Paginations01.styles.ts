import styled from "@emotion/styled";

export const Column = styled.span`
  margin: 0 50px;
`;

interface IPageProps {
  isActive?: boolean;
}

export const Page = styled.div`
  display: flex;
  margin-left: 423px;
`;

export const Pages = styled.span`
  margin: 0 10px;
  color: ${(props: IPageProps) => (props.isActive ? "#FFD600" : "#000")};
  font-weight: ${(props: IPageProps) => (props.isActive ? "bold" : "normal")};
  cursor: ${(props: IPageProps) => (props.isActive ? "none" : "pointer")};
`;
