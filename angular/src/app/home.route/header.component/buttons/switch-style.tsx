import { motion } from "framer-motion"
import * as React from "react"

export default function StyleButton() {
	//If card style is block then Style will be true and button icon will be bricks svg
	const Style = localStorage.getItem("style")
	//Sets the style
	function setStyle() {
		//Creates cookie for style to save it after refresh
		if (Style == "block") localStorage.setItem("style", "list")
		else if (Style == "list") localStorage.setItem("style", "block")
		//Reload the page cuz there is no way to pass it or i just too dum (useEffect+useInject=HooksError)
		window.location.reload()
	}
	return (
		<motion.button
			className='def-svg-button'
			whileHover={{ scale: 1.2 }}
			whileTap={{ scale: 0.8 }}
			transition={{ type: "spring", stiffness: 100, damping: 8, duration: 10 }}
			onClick={() => {
				setStyle()
			}}>
			{Style == "block" || Style == undefined ? (
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
						d='M3.75 6A2.25 2.25 0 016 3.75h2.25A2.25 2.25 0 0110.5 6v2.25a2.25 2.25 0 01-2.25 2.25H6a2.25 2.25 0 01-2.25-2.25V6zM3.75 15.75A2.25 2.25 0 016 13.5h2.25a2.25 2.25 0 012.25 2.25V18a2.25 2.25 0 01-2.25 2.25H6A2.25 2.25 0 013.75 18v-2.25zM13.5 6a2.25 2.25 0 012.25-2.25H18A2.25 2.25 0 0120.25 6v2.25A2.25 2.25 0 0118 10.5h-2.25a2.25 2.25 0 01-2.25-2.25V6zM13.5 15.75a2.25 2.25 0 012.25-2.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-2.25A2.25 2.25 0 0113.5 18v-2.25z'
					/>
				</svg>
			) : Style == "list" ? (
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
						d='M8.25 6.75h12M8.25 12h12m-12 5.25h12M3.75 6.75h.007v.008H3.75V6.75zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zM3.75 12h.007v.008H3.75V12zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm-.375 5.25h.007v.008H3.75v-.008zm.375 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z'
					/>
				</svg>
			) : null}
		</motion.button>
	)
}
