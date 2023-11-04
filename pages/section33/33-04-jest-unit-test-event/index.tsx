import { useState } from "react"

export default function JestUnitPage():JSX.Element{
    const [count, setCount] = useState(0);

    const onClickBtn = () =>{
        setCount((prev) => prev+1);
    }
    return(
        <>
            <div role="count">{count}</div>
            <button role="count-button" onClick={onClickBtn}>철수랑 놀러가기</button>
        </>
    )
}