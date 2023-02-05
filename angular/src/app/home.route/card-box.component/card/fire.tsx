import * as React from "react"
import { motion } from "framer-motion"
//
import { useMutation } from "@apollo/client"
import { useInjected } from "@bubblydoo/angular-react"
//
import { AppService } from "src/app/app.service"
import { CardContext } from "../card-box"
//
import { FIRE_CARD } from "src/app/API/cards/fire.cards"

export default function Fire() {
	//Take data from context
	const cardInfo: any = React.useContext(CardContext)
	//To check is user logged in P.S. Its looks rly weird but its sure works
	const [checkUser, doCheckUser] = React.useState(false)
	//Declate id, name and fire number
	const id = cardInfo.id
	const [fireNumber, setFireNumber] = React.useState(cardInfo.fire)
	const name = useInjected(AppService).user.name
	//Is fired?
	const [fire, setFire] = React.useState(name != "" ? cardInfo.arsons.includes(name) : false)
	//Its to fire the card
	const [fireCard] = useMutation(FIRE_CARD, { variables: { id, fire, name } })
	return (
		<>
			{checkUser == true ? (name == "" ? useInjected(AppService).CallRoute("LogSignIn") : null) : null}
			<div className='flex justify-center items-center flex-col-reverse absolute right-0 lg:left-0 z-[2] w-[6vh] h-[12vh] lg:w-8 lg:h-14 shadow-md -translate-y-[12vh] lg:-translate-y-14'>
				<button
					onClick={() => {
						const s = !fire
						setFire(s)
						doCheckUser(true)
						fireCard()
						if(s == true) {
							setFireNumber(fireNumber + 1)
						}
						if(s == false) {
							setFireNumber(fireNumber - 1)
						}
					}}>
					{fire == true ? (
						<motion.svg
							whileHover={{ scale: 1.75 }}
							initial={{ scale: 1.5 }}
							whileTap={{ scale: 1.25 }}
							exit={{ scale: 1 }}
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='small-svg stroke-darkColour2 dark:stroke-lightColour2'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z'
							/>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z'
							/>
						</motion.svg>
					) : fire == false ? (
						<motion.svg
							whileHover={{ scale: 1.5 }}
							whileTap={{ scale: 0.75 }}
							xmlns='http://www.w3.org/2000/svg'
							fill='none'
							viewBox='0 0 24 24'
							strokeWidth='1.5'
							stroke='currentColor'
							className='small-svg'>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z'
							/>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								d='M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1A3.75 3.75 0 0012 18z'
							/>
						</motion.svg>
					) : null}
				</button>
				<div className='def-theme-text'>{fireNumber}</div>
			</div>
		</>
	)
}
