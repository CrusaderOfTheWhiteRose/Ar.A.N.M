import * as React from "react"
import { motion } from "framer-motion"
import Fire from "./fire"
import AdminUI from "./admin-ui"
import { CardContext } from "../card-box"

export default function Card() {
	const dragZone = React.useRef(null)
	const cardInfo: any = React.useContext(CardContext)
	return (
		<div className='relative' ref={dragZone}>
			<motion.div drag dragConstraints={dragZone}>
				<AdminUI />
				<button
					className='absolute z-[2] w-8 h-8 shadow-md flex justify-center items-center'
					onClick={() => {
						navigator.clipboard.writeText(cardInfo.id)
						alert("Id (" + cardInfo.id + ") Is Copied")
					}}>
					<motion.svg
						whileHover={{ scale: 1.25 }}
						whileTap={{ scale: 0.75 }}
						xmlns='http://www.w3.org/2000/svg'
						fill='none'
						viewBox='0 0 24 24'
						strokeWidth='1.5'
						stroke='currentColor'
						className='w-6 h-6 flex justify-self-center stroke-slate-800 transition-colors duration-1000 dark:stroke-white'>
						<path
							strokeLinecap='round'
							strokeLinejoin='round'
							d='M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6'
						/>
					</motion.svg>
				</button>
				<motion.div
					className='shadow-md max-w-[20rem] p-4 break-all def-theme-front'
					whileHover={{ scale: 1.05 }}
					whileTap={{ scale: 0.95 }}>
					<div className='flex flex-row justify-around gap-12'>
						<cite className='font-thin text-lg translate-x-8 def-theme-text'>{cardInfo.author}</cite>
						<time className='antialiased font-thin text-sm def-theme-text'>{cardInfo.time}</time>
					</div>
					<div className='def-theme-front-front'>
						<article className='text-4xlg font-bold def-theme-text'>{cardInfo.upper}</article>
						<img
							src={cardInfo.center}
							alt='Card`s Center Image'
							className='object-cover border rounded-md h-[30vh] w-[30vh]'
							onDragStart={(event) => event.preventDefault()}
						/>
						<article className='text-2xlg def-theme-text'>{cardInfo.bottom}</article>
					</div>
				</motion.div>
				<Fire />
			</motion.div>
		</div>
	)
}
