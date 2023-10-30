import styled from "@emotion/styled";

interface ILayout {
  children: JSX.Element;
}

const Body = styled.div``;

export default function Layout(props: ILayout): JSX.Element {
  return (
    <>
      <Body>{props.children}</Body>
    </>
  );
}
