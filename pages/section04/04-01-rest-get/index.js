import axios from "axios";
import EmtionPage from "../../section01/01-02-emotion";

export default function RestGetPage() {
  function onClickAsync() {
    const result = axios.get("https://koreanjson.com/posts/1");
    console.log(result);
  }

  const onClickSync = async () => {
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result);
  };

  return (
    <div>
      <button onClick={onClickAsync}>REST-API(비동기) 요청</button>
      <button onClick={onClickSync}>REST-API(동기) 요청</button>
      <EmtionPage></EmtionPage>
    </div>
  );
}
