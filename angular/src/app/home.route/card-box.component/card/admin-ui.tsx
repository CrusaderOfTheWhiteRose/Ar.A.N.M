import * as React from "react"
import { motion } from "framer-motion"
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
	const [upper, setUpper] = React.useState<string>("")
	const [center, setCenter] = React.useState<string>("")
	const [bottom, setBottom] = React.useState<string>("")
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
		updateCard()
		setFormUpdate(false)
		location.reload()
	}
	//To update the card
	const [updateCard] = useMutation(UPDATE_CARD, {
		variables: { id, upper, center, bottom },
	})
	return (
		<>
			<div className='absolute z-[2] shadow-md flex justify-center items-center flex-col lg:flex-row translate-y-[6vh] lg:translate-x-[2em] lg:translate-y-[0px]'>
				<motion.button
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
							d='M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0l3.181 3.183a8.25 8.25 0 0013.803-3.7M4.031 9.865a8.25 8.25 0 0113.803-3.7l3.181 3.182m0-4.991v4.99'
						/>
					</svg>
				</motion.button>
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
							d='M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
						/>
					</svg>
				</motion.button>
			</div>
			{formUpdate == true ? (
				<div className='absolute w-full h-full bg-transparent left-0 top-0 flex justify-center items-center def-theme-text'>
					<div
						onClick={() => {
							setFormUpdate(false)
						}}
						className='h-screen w-screen'></div>
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
							className='mt-[1em] px-[2em] py-[0.75em] w-[16ch] button-hover tex'
							whileTap={{ scale: 0.8 }}
							whileHover={{ scale: 1.2 }}
							transition={{ type: "spring", stiffness: 400, damping: 10 }}>
							SUBMIT
						</motion.button>
					</form>
				</div>
			) : null}
			{formDelete == true ? (
				<div className='absolute w-full h-full bg-transparent left-0 top-0 flex justify-center items-center def-theme-text'>
					<div
						onClick={() => {
							setFormDelete(false)
						}}
						className='h-screen w-screen'></div>
					<div className='def-theme-back def-form absolute'>
						<b>
							<div>Are You Sure?</div>
						</b>
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
									location.reload()
								}}>
								Yep
							</button>
						</div>
					</div>
				</div>
			) : null}
		</>
	)
}
