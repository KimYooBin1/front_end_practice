import { useState } from "react";

export default function CommentItem(props: any): JSX.Element {
  const [isEdit, setIsEdit] = useState(false);
  const onClickEdit = (): void => {
    setIsEdit(true);
  };
  return (
    <>
      {!isEdit ? (
        <div>
          <span style={{ margin: "10px" }}>{props.el?.title}</span>
          <span style={{ margin: "10px" }}>{props.el?.writer}</span>
          <button onClick={onClickEdit}>수정하기</button>
        </div>
      ) : (
        <>
          <input type="text" key={props.el._id} />
          <br />
        </>
      )}
    </>
  );
}
