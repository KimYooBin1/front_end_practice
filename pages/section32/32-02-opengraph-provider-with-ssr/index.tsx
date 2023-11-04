//제공자일때 네이버 다음 쿠팡

import { gql, useQuery } from '@apollo/client'
import Head from 'next/head'
import { GraphQLClient } from 'graphql-request'

const FETCH_USED_ITEM = gql`
    query fetchUseditem ($useditemId : ID!){
        fetchUseditem(useditemId : $useditemId){
            _id
            name
            remarks
            images
        }
    }
`

export default function OpenGraphProviderPage(props:any) : JSX.Element{
    // const {data} = useQuery(FETCH_USED_ITEM, {variables:{
    //     useditemId: "6542724b5d6eaa0029f7c132"
    // }})
    return(
        <>
        <Head>
            <meta property='og:title' content={props?.qqq.name}/>
            <meta property='og:description' content={props?.qqq.remarks}/>
            <meta property='og:imgae' content={props?.qqq.images?.[0]}/>
        </Head>
        <div>중고마켓에 오신 것을 환영합니다.(여기는 body입니다)</div>
        </>
    )
}
//getServerSideProps 는 이미 존재하는 단어이므로 개발자 마음데로 변경 불가능
//server 에서만 실행된다. (ex useEffect 는 클라이언트에서만 실행되는 것처럼 getServerSideProps 는 서버에서만 실행된다)
//return 결과가 main 함수의 props 로 들어가게 된다
export const getServerSideProps = async () :Promise<any>=>{
    console.log("여기는 서버입니다!")
    const graphQlClient = new GraphQLClient(
        "https://backend-practice.codebootcamp.co.kr/graphql"
    );
    const result : any = await graphQlClient.request(FETCH_USED_ITEM, {
        useditemId: "6542724b5d6eaa0029f7c132"
    });
    return {
        props:{
            qqq:{
                name:result.fetchUseditem.name,
                remarks:result.fetchUseditem.remarks,
                images:result.fetchUseditem.images 
            }
        }
    }
};