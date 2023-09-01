import { useRouter } from "next/router";

export default function StaticRoutingPage() {
  const router = useRouter();

  const onClickMove1 = () => {
    router.push("/section05/05-04-dynamic-routing-board-query-moved/4");
  };
  const onClickMove2 = () => {
    router.push("/section05/05-04-dynamic-routing-board-query-moved/5");
  };
  const onClickMove3 = () => {
    router.push("/section05/05-04-dynamic-routing-board-query-moved/6");
  };
  return (
    <div>
      <button onClick={onClickMove1}>페이지 4</button>
      <button onClick={onClickMove2}>페이지 5</button>
      <button onClick={onClickMove3}>페이지 6</button>
    </div>
  );
}
