import { Modal } from "antd";
import dynamic from "next/dynamic";
import { useForm } from "react-hook-form";
import "react-quill/dist/quill.snow.css";
const ReactQuill = dynamic(async () => await import("react-quill"), {
  ssr: false,
});

export default function WebEditorPage(): JSX.Element {
  const { register, setValue, trigger } = useForm({
    mode: "onChange",
  });

  const onChangeContents = (value: string): void => {
    console.log(value);

    setValue("contents", value === "<p><br></p>" ? "" : value); //register 로 값을 못 줄때 강제로 값을 준다
    void trigger("contents"); //onChange 됬으니까 에러검증 요청
  };
  const onClickSubmit = async (event: any): Promise<void> => {
    event.preventDefault();
    const { Modal } = await import("antd");
    Modal.success({ content: "게시글 등록에 성공했습니다!!" });
  };
  return (
    <form onSubmit={onClickSubmit}>
      작성자 :{" "}
      <input
        type="text"
        placeholder="작성자를 입력해주세요"
        {...register("writer")}
      />
      <br />
      비밀번호 :{" "}
      <input
        type="password"
        placeholder="비밀번호를 입력해주세요"
        {...register("password")}
      />
      <br />
      제목 :{" "}
      <input
        type="text"
        placeholder="제목를 입력해주세요"
        {...register("title")}
      />
      <br />
      내용 :{process.browser && <ReactQuill onChange={onChangeContents} />}
      <br />
      <button>등록하기</button>
    </form>
  );
}
