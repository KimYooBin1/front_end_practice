import { useMutation,gql,useQuery } from "@apollo/client"
import { IMutation, IMutationLikeBoardArgs, IQuery, IQueryFetchBoardArgs } from "../../../src/commons/types/generated/types"

//좋아요 갯수 가지고 오는 api _ 게시글 조회 api에서 좋아요 갯수만 뽑아 옵니다. 
const FETCH_BOARD = gql`
	query fetchBoard($boardId: ID!){
		fetchBoard(boardId: $boardId){
			_id
			likeCount
		}
	}
`

//좋아요 카운트 올리는 api
const LIKE_BOARD = gql`
	mutation likeBoard($boardId:ID!){
		likeBoard(boardId:$boardId)
	}
`

export default function(){
	const [likeBoard] = useMutation<Pick<IMutation,"likeBoard">,IMutationLikeBoardArgs>(LIKE_BOARD)
	const { data } = useQuery<Pick<IQuery, "fetchBoard">, IQueryFetchBoardArgs>(FETCH_BOARD,{variables :{boardId : "65446c345d6eaa0029f7c185"} })
	
	const onClickLike = ()=>{
		//likeBoard 뮤테이션 함수를 실행하겠습니다.
		void likeBoard({
			variables :{
				boardId : "65446c345d6eaa0029f7c185"
			},

		// 응답을 받고난 후 받아온 응답을 다시 fetch 해줍니다. -> 느리고 효율적이지 못합니다.(백엔드에 요청을 한번더 해야하고 받아올때 까지 기다려야 합니다.)
		//refetchQueries: [
		//	{
		//		query: FETCH_BOARD,
		//		variables : {	boardId : "//게시글 아이디 넣어주세요!" }
		//	}
		// ]

		//옵티미스틱 UI -> 캐시를 바꾸고 캐시값을 받아오는걸 기다리지 않고 바로 바꿔줍니다.
		optimisticResponse: {
			likeBoard : (data?.fetchBoard.likeCount || 0)+1
		},
		// apollo 캐시를 직접 수정을 할 수 있었습니다.(백엔드 캐시가 아닙니다.) -> 느리지만 효율적입니다. (백엔드에 요청은 안하지만, 받아올때까지 기다려줘야 합니다.)
			update(cache,{data}){
				// 이전 시간에는 modify를 사용했지만, 오늘은 writeQuery를 사용해보겠습니다.
				cache.writeQuery({
                    
					query : FETCH_BOARD,
					variables : {boardId:"65446c345d6eaa0029f7c185"},
					//어떻게 수정할 것인지는 아래에 적어줍니다.
					data: {
						// 기존값과 똑같이 받아오셔야 합니다.
						fetchBoard: {
							_id : "65446c345d6eaa0029f7c185",
							__typename : "Board",
							likeCount: data?.likeBoard
						}
					}
				})
			}
		})
	}
	return(
		<div>
				<h1>옵티미스틱 UI</h1>
				<div>현재카운트(좋아요): <span>{data?.fetchBoard.likeCount}</span> 왜 숫자 안나옴?</div>
				<button onClick={onClickLike}>좋아요 올리기!!</button>
		</div>
	)
} 