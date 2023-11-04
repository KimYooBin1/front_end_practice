
import {render} from '@testing-library/react'
import "@testing-library/jest-dom"
import JestUnitPage from '../../pages/section33/33-03-jest-unit-test-snapshot'

it("기존 사진과 바뀐게 없는지 확인해보자!! - snapshot test",()=>{
	const result = render(<JestUnitPage />)
	//처음 실행시 사진을 찍어서 저장하게 되고 그다음부터 해당 snapshot 과 비교한다
	//yarn test -u 옵션을 통해 snapshot 을 업데이트 할 수 있다.
	expect(result.container).toMatchSnapshot()	
})