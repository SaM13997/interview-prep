import { useEffect, useRef, useState } from "react"

export default function Carousel() {
	const styles = {
		slides:
			'bg-red-200 h-64 min-w-full border border-zinc-500 snap-start rounded-xl flex justify-center items-center inline-block text-3xl animate-fade',
	}

	const parent = useRef<HTMLDivElement>(null)
	const [index, setIndex] = useState(0)
	const handleNext = () => {
		//Last element case
		if (parent.current && index === parent.current.children.length - 3) {
			console.log(index, 'Before looping back')
			parent.current.children[0].scrollIntoView({ behavior: 'smooth' })
			setIndex(0)
			console.log(index, 'After looping back')
		} else if (parent.current) {
			parent.current.children[index + 1].scrollIntoView({
				behavior: 'smooth',
			})
			setIndex(index + 1)
		}
	}
	const handlePrev = () => {
		//First element case
		if (parent.current && index === 0) {
			parent.current.children[
				parent.current.children.length - 3
			].scrollIntoView({
				behavior: 'smooth',
			})
			console.log(index, 'handlePrev')
			setIndex(parent.current.children.length - 3)
		} else if (parent.current) {
			parent.current.children[index - 1].scrollIntoView({ behavior: 'smooth' })
			setIndex(index - 1)
		}
	}
	useEffect(() => {
		console.log(index)
	}, [index])
	return (
		<div className="container relative bg-white border rounded-xl py-8">
			<p className="text-3xl text-black mb-4 ml-20">Carousel</p>
			<div
				ref={parent}
				className=" flex scrollbar-none bg-black mx-20 overflow-x-auto scroll-smooth snap-x snap-mandatory gap-5"
			>
				<div className={styles.slides}>0</div>
				<div className={styles.slides}>1</div>
				<div className={styles.slides}>2</div>
				<div className={styles.slides}>3</div>
				<div className={styles.slides}>4</div>
				<div className={styles.slides}>5</div>
				<button
					type="button"
					onClick={handlePrev}
					className="prev absolute left-14 top-[50%] bg-black text-2xl text-white rounded-full size-12 grid place-content-center"
				>
					{'<'}
				</button>
				<button
					type="button"
					onClick={handleNext}
					className="next absolute right-14 top-[50%] bg-black text-2xl text-white rounded-full size-12 grid place-content-center"
				>
					{'>'}
				</button>
			</div>
		</div>
	)
}
