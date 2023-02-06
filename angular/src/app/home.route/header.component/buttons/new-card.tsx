import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
//
import { useInjected } from "@bubblydoo/angular-react"
import { useMutation } from "@apollo/client"
//
import { AppService } from "src/app/app.service"
import { CREATE_CARD } from "src/app/API/cards/create.cards"

export default function NewCardButton() {
	//Init variables which will be used to create card
	//eslint-disable-next-line prefer-const
	let time = "", author = ""
	const [upper, setUpper] = React.useState<string>("")
	const [center, setCenter] = React.useState<string>()
	const [bottom, setBottom] = React.useState<string>("")
	//Sets time
	time = new Date().getHours() + ":" + new Date().getMinutes()
	//Sets author name
	author = useInjected(AppService).user.name
	//Opens/Closes form to create card
	const [formOpen, setFormOpen] = React.useState(false)
	//Handles inputs
	function inputHandler(event: any, inputNum: number) {
		switch (inputNum) {
			case 1:
				setUpper(event.target.value)
				break
			case 2:
				//Reads the file
				//eslint-disable-next-line no-case-declarations
				const file: Blob = event.target.files[0]
				//eslint-disable-next-line no-case-declarations
				const reader = new FileReader()
				//When reading is over
				reader.onloadend = () => {
					setCenter(reader.result as string)
				}
				//Start the reading
				reader.readAsDataURL(file)
				break
			case 3:
				setBottom(event.target.value)
				break
			default:
				alert("How the hick you did it?")
		}
	}
	//Just on submit, its makes code more organized in my opinion
	function onSubmit() {
		event!.preventDefault()
		createCard()
		setFormOpen(false)
		location.reload()
	}
	//To check is user logged in P.S. Its looks rly weird but its sure works
	const [checkUser, doCheckUser] = React.useState(false)
	//Create card function
	const [createCard] = useMutation(CREATE_CARD, {
		variables: { author, time, upper, center, bottom },
	})
	return (
		<>
			{checkUser == true ? (useInjected(AppService).user.name == "" ? useInjected(AppService).CallRoute("LogSignIn") : null) : null}
			<motion.button
				className='def-svg-button'
				whileHover={{ scale: 1.2 }}
				whileTap={{ scale: 0.8 }}
				transition={{ type: "spring", stiffness: 100, damping: 8, duration: 10 }}
				onClick={() => {
					setFormOpen(true)
					doCheckUser(true)
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
			<AnimatePresence>
				{formOpen == true ? (
					<motion.div
						className='def-form-parent fixed'
						initial={{ opacity: 0, scale: 0.75, y: -1 * window.innerHeight }}
						animate={{ opacity: 100, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.8, y: -1 * window.innerHeight }}
						transition={{ type: "spring", stiffness: 100, damping: 8, duration: 10 }}>
						<div
							onClick={() => {
								setFormOpen(false)
							}}
							className='h-full w-full'></div>
						<form className='def-form def-theme-back'>
							<div className='gap-0 lg:gap-[1em] flex flex-col justify-center items-center def-theme-back'>
								<input
									id='text'
									className='w-[20ch] input-hover'
									placeholder='UpperText'
									type='text'
									onChange={() => inputHandler(event, 1)}
								/>
							</div>
							<div className='gap-[1em] flex flex-col justify-center items-center'>
								<input
									type='file'
									id='file'
									className='hidden'
									accept='image/*'
									multiple={false}
									onChange={() => inputHandler(event, 2)}
								/>
								<label htmlFor='file'>
									<img
										src={center}
										id='img'
										className='w-[20vh] h-[20vh] object-cover rounded-2xl input-hover content(`Image`)'
									/>
								</label>
							</div>
							<div className='gap-[1em] flex flex-col justify-center items-center '>
								<textarea
									id='textarea'
									placeholder='BottomText'
									className='p-[1em] w-[20ch] h-[20vh] resize-none input-hover'
									onChange={() => inputHandler(event, 3)}></textarea>
							</div>
							<motion.button
								onClick={() => {
									onSubmit()
								}}
								className='mt-[1em] px-[2em] py-[0.75em] w-[16ch] button-hover'
								whileTap={{ scale: 0.8 }}
								whileHover={{ scale: 1.2 }}
								transition={{ type: "spring", stiffness: 400, damping: 10 }}>
								SUBMIT
							</motion.button>
						</form>
					</motion.div>
				) : null}
			</AnimatePresence>
		</>
	)
}
