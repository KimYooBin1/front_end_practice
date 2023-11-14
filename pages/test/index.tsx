import { useState } from "react"
import dynamic from 'next/dynamic';

const ReactQuill = dynamic( async() => await import('react-quill'), {
    ssr : false
})
import "react-quill/dist/quill.snow.css";

export default function Test(){
    const [contents, setContents] = useState("");

    const onChangeContents = (value:string) =>{
        console.log(value);
        setContents(value);
    }
    return(
        <>
            <ReactQuill onChange={onChangeContents}/>
            내용 : <div dangerouslySetInnerHTML={{
                __html: contents
            }}></div>
        </>
    )  
}