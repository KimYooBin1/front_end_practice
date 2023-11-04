
import {fireEvent, render, screen} from '@testing-library/react'
import "@testing-library/jest-dom"
import JestUnitPage from '../../pages/section33/33-04-jest-unit-test-event'

it("button 을 눌렀을 때, 제대로 작동하는지 확인하기!!",()=>{
	const result = render(<JestUnitPage />)
	fireEvent.click(
		screen.getByRole("count-button"	)
	)
	expect(screen.getByRole("count")).toHaveTextContent("1")
})