import * as React from "react"
import { motion } from "framer-motion"

export default function PostButton() {
	return (
		<motion.button
			className='def-svg-button'
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
					d='M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z'
				/>
			</svg>
		</motion.button>
	)
}
