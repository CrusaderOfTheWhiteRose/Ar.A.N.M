import * as React from "react"
import { motion } from "framer-motion"
import { CardContext } from "../card-box"

export default function AdminUI() {
	const cardInfo: any = React.useContext(CardContext)
	return (
		<div className='absolute z-[2] flex flex-col -translate-y-8'>
			<motion.button
				whileHover={{ scale: 1.2 }}
				whileTap={{ scale: 0.8 }}
				onClick={() => {
					//
				}}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth='1.5'
					stroke='currentColor'
					className='small-svg'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
					/>
				</svg>
			</motion.button>
			<motion.button
				className='flex transition-colors duration-1000 bg-white dark:bg-slate-800'
				whileHover={{ scale: 1.2 }}
				whileTap={{ scale: 0.8 }}
				onClick={() => {
					//
				}}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth='1.5'
					stroke='currentColor'
					className='small-svg'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
					/>
				</svg>
			</motion.button>
		</div>
	)
}
