import * as React from "react"
import { AnimatePresence, motion } from "framer-motion"
//
import { useMutation } from "@apollo/client"
//
import { CardContext } from "../card-box"
//
import { DELETE_CARD } from "src/app/API/cards/delete.cards"
import { UPDATE_CARD } from "src/app/API/cards/update.cards"

export default function AdminUI() {
	//Take card's id from context
	const cardInfo: any = React.useContext(CardContext)
	//Declare id
	const id = cardInfo.id
	//To control form
	const [formUpdate, setFormUpdate] = React.useState(false)
	const [formDelete, setFormDelete] = React.useState(false)
	//To delete the card
	const [deleteCard] = useMutation(DELETE_CARD, {
		variables: { id },
	})
	//Update variables
	let upper = "",
		center: any,
		bottom = ""
	//Functions to update card
	//To rerender image
	const [image, setImage] = React.useState(undefined)
	//Handles inputs
	function inputHandler(event: any, inputNum: number) {
		switch (inputNum) {
			case 1:
				upper = event.target.value
				break
			case 2:
				//Reads the file
				//eslint-disable-next-line no-case-declarations
				const file: Blob = event.target.files[0]
				//eslint-disable-next-line no-case-declarations
				const reader = new FileReader()
				//When reading is over
				reader.onloadend = () => {
					center = reader.result as string
					setImage(center)
				}
				//Start the reading
				reader.readAsDataURL(file)
				break
			case 3:
				bottom = event.target.value
				break
			default:
				alert("How the hick you did it?")
		}
	}
	//Just on submit, its makes code more organized in my opinion
	function onSubmit() {
		event!.preventDefault()
		updateCard()
		setFormUpdate(!formUpdate)
	}
	//To update the card
	const [updateCard] = useMutation(UPDATE_CARD, {
		variables: { id, upper, center, bottom },
	})
	return (
		<>
			<div className='absolute z-[2] flex flex-col -translate-x-[1.72em]'>
				<motion.button
					whileHover={{ scale: 1.2 }}
					whileTap={{ scale: 0.8 }}
					onClick={() => {
						setFormDelete(true)
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
						setFormUpdate(true)
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
			<AnimatePresence>
				{formUpdate == true ? (
					<motion.div
						className='def-form-parent fixed'
						initial={{ opacity: 0, scale: 0.75, y: -1 * window.innerHeight }}
						animate={{ opacity: 100, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.8, y: -1 * window.innerHeight }}
						transition={{ type: "spring", stiffness: 100, damping: 8, duration: 10 }}>
						<div
							onClick={() => {
								setFormUpdate(false)
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
										src={image}
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
				{formDelete == true ? (
					<div className='absolute w-full h-full bg-transparent left-0 top-0 flex justify-center items-center'>
						<div
							onClick={() => {
								setFormDelete(false)
							}}
							className='h-full w-full'></div>
						<div className='def-theme def-form absolute'>
							<div>Are You Sure?</div>
							<div>Delete Post: {id}?</div>
							<div className='flex flex-row gap-4'>
								<button
									onClick={() => {
										setFormDelete(false)
									}}>
									No
								</button>
								<button
									onClick={() => {
										deleteCard()
									}}>
									Yep
								</button>
							</div>
						</div>
					</div>
				) : null}
			</AnimatePresence>
		</>
	)
}
