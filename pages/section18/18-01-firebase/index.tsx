import {
  collection,
  addDoc,
  getDocs,
  getFirestore,
} from "firebase/firestore/lite";
import { firebaseapp } from "../../../src/commons/libraries/firebase";

export default function FireBasePage() {
  const onClickSubmit = () => {
    const board = collection(getFirestore(firebaseapp), "board");

    void addDoc(board, {
      writer: "철수",
      title: "안녕",
      contents: "반갑습니다",
    });
  };
  const onClickFetch = async (): Promise<void> => {
    const board = collection(getFirestore(firebaseapp), "board");

    const result = await getDocs(board);
    const datas = result.docs.map((el) => el.data());
    console.log(datas);
  };
  return (
    <>
      <button onClick={onClickSubmit}>등록하기</button>
      <button onClick={onClickFetch}>조회하기</button>
    </>
  );
}
