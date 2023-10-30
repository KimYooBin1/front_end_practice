import axios from "axios";
import { useState } from "react";

export default function RestGetPage(): JSX.Element {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const onClickSync = async (): Promise<void> => {
    setIsSubmitting(true);
    const result = await axios.get("https://koreanjson.com/posts/1");
    console.log(result);
    console.log(result.data.title);
    setIsSubmitting(false);
  };
  return (
    <>
      <button onClick={onClickSync} disabled={isSubmitting}>
        Rest-Api 요청하기
      </button>
    </>
  );
}
