import { useRecoilState } from "recoil";

import { isEditState } from "../../../commons/stores";
export default function BoardWriteUI() {
  const [isEdit, setIsEdit] = useRecoilState(isEditState);
  const onClickBtn = () => {
    setIsEdit(true);
  };
  return (
    <>
      <div>{isEdit ? "수정하기" : "등록하기"}</div>
      <button onClick={onClickBtn}>1223123123123123</button>
    </>
  );
}
