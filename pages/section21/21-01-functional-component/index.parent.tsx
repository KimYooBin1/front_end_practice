import ChildPage from ".";

export default function ParentPage(): JSX.Element {
  return (
    <>
      {/* <ChildPage count={10} /> */}
      {ChildPage({ count: 2312321, name: "asdfasd" })}
    </>
  );
}
