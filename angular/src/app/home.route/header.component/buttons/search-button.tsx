import * as React from "react"
import { AnimatePresence, motion, Reorder } from "framer-motion"
//
import { useQuery } from "@apollo/client"
//
import { FIND_CARD } from "src/app/API/cards/find.cards"
import Card from "../../card-box.component/card/card"

//This is what my clidrens will get - nothing, until its runs
export const CardContext = React.createContext<any>(undefined)

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
	//It will ask for data every time its renders
	const { data } = useQuery(FIND_CARD, { variables: { id, author, upper, bottom } })
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
						initial={{ opacity: 0, scale: 0.75, y: -1 * window.innerHeight }}
						animate={{ opacity: 100, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.8, y: -1 * window.innerHeight }}
						transition={{ type: "spring", stiffness: 100, damping: 8, duration: 10 }}>
						<div
							onClick={() => {
								setFormOpen(false)
							}}
							className='absolute z-[-2] h-full w-full'></div>
						<div className='def-theme-back relative top-[-2rem] flex flex-col shadow-lg h-[80vh] w-[80vw] py-[0px] px-[0px] lg:py-[2.5em] lg:px-[2em]'>
							<div className='flex justify-center pt-[2vh] lg:pt-[0px] lg:justify-end'>
								<div className='shadow-md p-[1.4vmax] lg:p-[1.4em]'>
									<input
										type='text'
										className='w-[100%] lg:w-[40ch] h-[6vh] def-theme-back def-theme-text'
										placeholder='Search'
										onChange={(event) => {
											setSearchFor(event.target.value)
										}}
									/>
									<div className='flex flex-row pt-[0.2em] gap-[0.2em]'>
										<motion.button
											className='flex justify-center items-center px-[0.6em] py-[0.4em] w-[110%] h-[20%] shadow-md def-theme-back text-[2vh] lg:text-[1em]'
											whileTap={{ scale: 0.8 }}
											whileHover={{ scale: 1.2 }}
											transition={{ type: "spring", stiffness: 400, damping: 10 }}
											onClick={() => {
												SwitchSearchIn(1)
											}}>
											ID
										</motion.button>
										<motion.button
											className='flex justify-center items-center px-[0.6em] py-[0.4em] w-[110%] h-[20%] shadow-md def-theme-back text-[2vh] lg:text-[1em]'
											whileTap={{ scale: 0.8 }}
											whileHover={{ scale: 1.2 }}
											transition={{ type: "spring", stiffness: 400, damping: 10 }}
											onClick={() => {
												SwitchSearchIn(2)
											}}>
											Author
										</motion.button>
										<motion.button
											className='flex justify-center items-center px-[0.6em] py-[0.4em] w-[110%] h-[20%] shadow-md def-theme-back text-[2vh] lg:text-[1em]'
											whileTap={{ scale: 0.8 }}
											whileHover={{ scale: 1.2 }}
											transition={{ type: "spring", stiffness: 400, damping: 10 }}
											onClick={() => {
												SwitchSearchIn(3)
											}}>
											Upper
										</motion.button>
										<motion.button
											className='flex justify-center items-center px-[0.6em] py-[0.4em] w-[110%] h-[20%] shadow-md def-theme-back text-[2vh] lg:text-[1em]'
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
								<div className='gap-[4vmax] lg:p-12 lg:gap-12 w-screen flex flex-wrap-reverse'>
									<Reorder.Group axis='y' values={data} onReorder={data}>
										{data.allCard.map((card: any) => (
											<Reorder.Item key={card.id} value={card}>
												<CardContext.Provider value={card}>
													<Card key={card.id} />
												</CardContext.Provider>
											</Reorder.Item>
										))}
									</Reorder.Group>
								</div>
							</div>
						</div>
					</motion.div>
				) : null}
			</AnimatePresence>
		</>
	)
}
