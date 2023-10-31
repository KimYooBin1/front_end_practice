import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
import {
  IMutation,
  IMutationUploadFileArgs,
} from "../../../src/commons/types/generated/types";

const UPLOAD_FILE = gql`
  mutation uploadFile($file: Upload!) {
    uploadFile(file: $file) {
      url
    }
  }
`;
const 나의그래프큐엘셋팅 = gql`
  mutation createBoard($createBoardInput: CreateBoardInput!) {
    createBoard(createBoardInput: $createBoardInput) {
      _id
    }
  }
`;
export default function ImageUploadPage(): JSX.Element {
  const [imageUrls, setImageUrls] = useState(["", "", ""]);
  const [files, setFiles] = useState<File[]>([]);

  const [uploadFile] = useMutation<
    Pick<IMutation, "uploadFile">,
    IMutationUploadFileArgs
  >(UPLOAD_FILE);

  const [나의함수] = useMutation(나의그래프큐엘셋팅);

  const onClickSubmit = async (): Promise<void> => {
    // const results = await Promise.all([
    //   uploadFile({ variables: { file: files[0] } }),
    //   uploadFile({ variables: { file: files[1] } }),
    //   uploadFile({ variables: { file: files[2] } }),
    // ]);

    // map을 사용해서 refactoring image 개수를 추가하기 쉽다
    const results = await Promise.all(
      files.map((el) => uploadFile({ variables: { file: el } }))
    );

    console.log(results);
    const resultUrl = results.map((el) => el.data?.uploadFile.url);
    console.log(resultUrl);
    const result = await 나의함수({
      variables: {
        createBoardInput: {
          writer: "123",
          password: "1234",
          title: "123",
          contents: "123",
          images: resultUrl,
        },
      },
    });
  };

  const onChangeFile =
    (index: number) =>
    async (event: ChangeEvent<HTMLInputElement>): Promise<void> => {
      const file = event.target.files?.[0]; //배열로 들어오는 이유: <input type="file" multiple />
      if (file === undefined) return;
      console.log(file);
      console.log("파일까지 나옴");

      //1. 임시 url 생성 => (가짜 url - 내 브라우저에서만 접근 가능)
      const result = URL.createObjectURL(file);
      console.log(result);

      //2. 임시 url 생성 => (진짜 url - 다른 브라우저에서도 접근 가능)
      const fileReader = new FileReader();
      fileReader.readAsDataURL(file);
      fileReader.onload = (event) => {
        //게시판에서 event.target.id 를 쓰면 eslint 가 잡았던 이유 : event.target 은 태그만을 가르키지 않음
        console.log(event.target?.result);
        if (typeof event.target?.result === "string") {
          const Url = [...imageUrls];
          Url[index] = event.target?.result;
          setImageUrls(Url);

          const tempFile = [...files];
          tempFile[index] = file;
          setFiles(tempFile);
        }
      };
    };
  return (
    <>
      <input type="file" onChange={onChangeFile(0)} multiple={true} />
      <input type="file" onChange={onChangeFile(1)} multiple={true} />
      <input type="file" onChange={onChangeFile(2)} multiple={true} />

      <img src={imageUrls[0]} />
      <img src={imageUrls[1]} />
      <img src={imageUrls[2]} />

      <button onClick={onClickSubmit}>게시글 등록하기</button>
    </>
  );
}
