import * as React from "react"
import { motion } from "framer-motion"

export default function SearchButton() {
	return (
		<div className='flex items-center'>
			<motion.button
				className='def-svg-button relative z-[10] bg-lightColour dark:bg-darkColour'
				whileHover={{ scale: 1.2 }}
				whileTap={{ scale: 0.8 }}
				transition={{ type: "spring", stiffness: 100, damping: 8, duration: 10 }}
				onClick={() => {
					//
				}}>
				<svg
					xmlns='http://www.w3.org/2000/svg'
					fill='none'
					viewBox='0 0 24 24'
					strokeWidth='1.5'
					stroke='currentColor'
					className='def-svg'>
					<path
						strokeLinecap='round'
						strokeLinejoin='round'
						d='M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z'
					/>
				</svg>
			</motion.button>
		</div>
	)
}
