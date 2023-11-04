import axios from "axios"

//개발자일때 디스코드 카카오톡 
export default function OpenGraphDeveloperPage():JSX.Element{
    const onClickEnter = async () :Promise<void>=>{
        //1.채팅데이터에 주소가 있는지  (ex, http~~ 로 시작하는거)
        //2. 해당 주소로 스크래핑하기
        const result = await axios.get("http://localhost:3000/section32/32-01-opengraph-provider")  //CORS 뮨제 발생, 실제로는 프록시 서버를 사용해야 한다.(프록시 서버란 백엔드 서버를 통해 원래 CORS에 위배되는 사이트에 접속할 수 있다)
        console.log(result.data)
        //3. 메타태그에서 오픈그래프(og:~~) 찾기
        console.log(result.data.split("<meta").filter((el:any) => el.includes("og:")))
    }
    return(
        <>
            <button onClick={onClickEnter}>채팅 입력 후 엔터치기</button>
        </>
    )
}