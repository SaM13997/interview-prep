import ParentChild from '@/components/shared/ParentChild'
import TicTacTow from '@/components/shared/TicTacTow'
import Carousel from '@/components/shared/carousel'
import { title } from '@/config.shared'
import type { MetaFunction } from '@remix-run/node'
import { ReactLenis, useLenis } from 'lenis/react'
import { useEffect, useRef, useState } from 'react'

export const meta: MetaFunction = () => {
	return [
		{ title: title() },
		{ name: 'description', content: 'Welcome to Remix!' },
	]
}

export default function Index() {
	const lenis = useLenis(({ scroll }) => {
		// console.log(scroll)
	})
	return (
		<ReactLenis root>
			<main className="container text-black flex flex-col gap-8 relative bg-white  py-8">
				<Carousel />
				<TicTacTow />
				<ParentChild />
			</main>
		</ReactLenis>
	)
}
