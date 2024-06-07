import React, { useState } from 'react'

function TicTacTow() {
	const [player, setPlayer] = useState(false)
  const handleClick = (e: any) => {
    if(e.target.innerText==='') e.target.innerText = player ? 'X' : 'O'

    setPlayer(state => !state)
  }
	return (
		<div className="flex flex-col gap-4 p-4 w-full text-black border rounded-xl">
			<p className="text-2xl"> TicTacTow</p>
			<div className="container">
				<div className="box size-64 justify-center items-center border py-2 flex flex-wrap">
					{[...Array(9)].map((_, i) => (
						// biome-ignore lint/a11y/useKeyWithClickEvents: <explanation>
						<div
              key={i}
              data-index={i}
							onClick={handleClick}
							className={`inner size-20 grid place-content-center text-3xl ${
								i % 2 === 0 ? 'bg-red-100' : 'bg-zinc-100'
							}`}
						>
							
						</div>
					))}
				</div>
			</div>
		</div>
	)
}

export default TicTacTow
