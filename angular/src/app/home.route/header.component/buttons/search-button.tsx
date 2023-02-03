import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"

export default function SearchButton() {
	//Controls search tab
	const [formOpen, setFormOpen] = React.useState(false)
	//I used useState so the user wont have to press buttons every time
	const [searchFor, setSearchFor] = React.useState("")
	//Just variables
	const [id, setId] = React.useState("")
	const [author, setAuthor] = React.useState("")
	const [upper, setUpper] = React.useState("")
	const [bottom, setBottom] = React.useState("")
	//Make every variables=null and sets value for needed variable
	function SwitchSearchIn(searchIn: number) {
		//Every variable is null (""=null)
		setId("");setAuthor("");setUpper("");setBottom("")
		//Sets value compare on which button user pressed
		switch (searchIn) {
			case 1:
				setId(searchFor)
				break
			case 2:
				setAuthor(searchFor)
				break
			case 3:
				setUpper(searchFor)
				break
			case 4:
				setBottom(searchFor)
				break
		}
	}

	return (
		<>
			<div className='flex items-center'>
				<motion.button
					className='def-svg-button relative z-[10] bg-lightColour dark:bg-darkColour'
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.8 }}
					transition={{ type: "spring", stiffness: 100, damping: 8, duration: 10 }}
					onClick={() => {
						setFormOpen(true)
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
			<AnimatePresence>
				{formOpen == true ? (
					<motion.div
						className='def-form-parent'
						initial={{ opacity: 0, scale: 0.75, y: -800 }}
						animate={{ opacity: 100, scale: 1, y: -50 }}
						exit={{ opacity: 0, scale: 0.8, y: 800 }}
						transition={{ type: "spring", stiffness: 100, damping: 8, duration: 10 }}>
						<div
							onClick={() => {
								setFormOpen(false)
							}}
							className='absolute z-[-2] h-full w-full'></div>
						<div className='def-theme-back relative top-[-2rem] flex flex-col shadow-lg h-[80vh] w-[80vw] py-[2.5em] px-[2em]'>
							<div className='flex justify-end'>
								<div className='shadow-md p-[1.4em]'>
									<input
										type='text'
										className='w-[40ch] h-[6vh] def-theme-back def-theme-text'
										placeholder='Search'
										onChange={(event) => {
											setSearchFor(event.target.value)
										}}
									/>
									<div className='flex flex-row pt-[0.2em] gap-[0.2em]'>
										<motion.button
											className='flex justify-center items-center px-[0.6em] py-[0.4em] w-[110%] h-[20%] shadow-md def-theme-back def-theme-text'
											whileTap={{ scale: 0.8 }}
											whileHover={{ scale: 1.2 }}
											transition={{ type: "spring", stiffness: 400, damping: 10 }}
											onClick={() => {
												SwitchSearchIn(1)
											}}>
											ID
										</motion.button>
										<motion.button
											className='flex justify-center items-center px-[0.6em] py-[0.4em] w-[110%] h-[20%] shadow-md def-theme-back def-theme-text'
											whileTap={{ scale: 0.8 }}
											whileHover={{ scale: 1.2 }}
											transition={{ type: "spring", stiffness: 400, damping: 10 }}
											onClick={() => {
												SwitchSearchIn(2)
											}}>
											Author
										</motion.button>
										<motion.button
											className='flex justify-center items-center px-[0.6em] py-[0.4em] w-[110%] h-[20%] shadow-md def-theme-back def-theme-text'
											whileTap={{ scale: 0.8 }}
											whileHover={{ scale: 1.2 }}
											transition={{ type: "spring", stiffness: 400, damping: 10 }}
											onClick={() => {
												SwitchSearchIn(3)
											}}>
											Upper
										</motion.button>
										<motion.button
											className='flex justify-center items-center px-[0.6em] py-[0.4em] w-[110%] h-[20%] shadow-md def-theme-back def-theme-text'
											whileTap={{ scale: 0.8 }}
											whileHover={{ scale: 1.2 }}
											transition={{ type: "spring", stiffness: 400, damping: 10 }}
											onClick={() => {
												SwitchSearchIn(4)
											}}>
											Bottom
										</motion.button>
									</div>
								</div>
							</div>
							<div className='p-[0.5em]'>
								<div className='flex flex-wrap justify-center gap-12 overflow-x-clip'></div>
							</div>
						</div>
					</motion.div>
				) : null}
			</AnimatePresence>
		</>
	)
}
