import React, { useState } from 'react'

function ParentChild() {
	// const [count, setCount] = useState(0)
  let count = 0

	return (
		<div className='flex flex-col justify-center items-center bg-amber-100 p-4 '>
			Parent
			<button type="button" onClick={() => (count + 1)}>
				Count++
			</button>
      <ChildComponent count={count} />
		</div>
	)
}

function ChildComponent(props: any) {
	return (
		<div>
			ChildComponent
			<p>Count: {props.count}</p>
		</div>
	)
}

export default ParentChild
