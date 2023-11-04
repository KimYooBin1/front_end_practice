import { fireEvent, render, screen, waitFor } from "@testing-library/react"
import PaginationNextPage from "../../pages/section33/33-05-jest-unit-test-mocking"
import { ApolloClient, ApolloProvider, HttpLink, InMemoryCache } from "@apollo/client"
import fetch from "cross-fetch"
import mockRouter from "next-router-mock"

//첫 변수를 만나게 되면 두번째 변수로 변환시켜서 test한다.
jest.mock("next/router", () => require("next-router-mock"))

// import {server} from "../../src/commons/mocks/index"

// beforeAll(()=>server.listen())
// afterAll(()=>server.close())

it("게시글이 잘 등록되는지 테스트", async () =>{
    const client = new ApolloClient({
        link: new HttpLink({
            uri: "http://mock.com/grapql",
            fetch,
        }),
        cache: new InMemoryCache(),
    });
    render(
    <ApolloProvider client={client}>
        <PaginationNextPage />
    </ApolloProvider>
    )

    fireEvent.change(screen.getByRole("input-writer"), {
        target: {value: "맹구"}
    })
    fireEvent.change(screen.getByRole("input-title"), {
        target: {value: "안녕하세요"}
    })
    fireEvent.change(screen.getByRole("input-contents"), {
        target: {value: "반갑습니다"}
    })

    fireEvent.click(screen.getByRole("submit-button"))
    await waitFor(()=>{
        // mockRouter.asPath : 페이지가 어디로 이동했는지
        expect(mockRouter.asPath).toEqual("/boards/qqq")
    })
})