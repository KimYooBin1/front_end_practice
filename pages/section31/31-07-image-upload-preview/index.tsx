// import { gql, useMutation } from "@apollo/client";
import { ChangeEvent, useState } from "react";
// import {
//   IMutation,
//   IMutationUploadFileArgs,
// } from "../../../src/commons/types/generated/types";

// const UPLOAD_FILE = gql`
//   mutation uploadFile($file: Upload!) {
//     uploadFile(file: $file) {
//       url
//     }
//   }
// `;

export default function ImageUploadPage(): JSX.Element {
  const [imageUrl, setImageUrl] = useState("");
  //   const [uploadFile] = useMutation<
  //     Pick<IMutation, "uploadFile">,
  //     IMutationUploadFileArgs
  //   >(UPLOAD_FILE);
  const onChangeFile = async (
    event: ChangeEvent<HTMLInputElement>
  ): Promise<void> => {
    const file = event.target.files?.[0]; //배열로 들어오는 이유: <input type="file" multiple />
    if (file === undefined) return;
    console.log(file);
    console.log("파일까지 나옴");
    // const result = await uploadFile({
    //   variables: {
    //     file,
    //   },
    // });
    // console.log(result.data?.uploadFile.url);
    // setImageUrl(result.data?.uploadFile.url ?? "");

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
        setImageUrl(event.target?.result);
      }
    };
  };
  return (
    <>
      <input type="file" onChange={onChangeFile} multiple={true} />
      <img src={imageUrl} />
      {/* <img src={`https://storage.googleapis.com/${imageUrl}`} /> */}
    </>
  );
}
