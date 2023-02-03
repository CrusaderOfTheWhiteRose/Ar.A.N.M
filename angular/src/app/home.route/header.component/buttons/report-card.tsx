import { useInjected } from "@bubblydoo/angular-react"
import { AnimatePresence, motion } from "framer-motion"
import * as React from "react"
import { AppService } from "src/app/app.service"
import { HomeRouteService } from "../../home-route.component.service"

export default function ReportButton() {
	//Checks if user is logged in
	function CheckUser() {
		if (useInjected(AppService).user.name == "") useInjected(AppService).CallRoute("LogSignIn")
	}
	//Init variables which will be used to send report
	let id = "",
		report = ""
	//Opens/Closes form to make report
	const [formOpen, setFormOpen] = React.useState(false)
	//Handles inputs
	function inputHandler(event: any, inputNum: number) {
		switch (inputNum) {
			case 1:
				id = event.target.value
				break
			case 2:
				report = event.target.value
				break
			default:
				alert("How the hick you did it?")
		}
	}
	//Just on submit, its makes code more organized in my opinion
	function onSubmit() {
		event!.preventDefault()
		setFormOpen(!formOpen)
	}
	//To check is user logged in P.S. Its looks rly weird but its sure works
	const [checkUser, doCheckUser] = React.useState(false)
	return (
		<>
			{checkUser == true ? (useInjected(AppService).user.name == "" ? useInjected(HomeRouteService).SendToRules() : null) : null}
			<motion.button
				className='def-svg-button'
				whileHover={{ scale: 1.2 }}
				whileTap={{ scale: 0.8 }}
				transition={{ type: "spring", stiffness: 100, damping: 8, duration: 10 }}
				onClick={() => {
					setFormOpen(true)
					CheckUser()
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
						d='M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.068.157 2.148.279 3.238.364.466.037.893.281 1.153.671L12 21l2.652-3.978c.26-.39.687-.634 1.153-.67 1.09-.086 2.17-.208 3.238-.365 1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0012 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018z'
					/>
				</svg>
			</motion.button>
			<AnimatePresence>
				{formOpen == true ? (
					<motion.div
						className='def-form-parent'
						initial={{ opacity: 0, scale: 0.75, y: 400 }}
						animate={{ opacity: 100, scale: 1, y: -50 }}
						exit={{ opacity: 0, scale: 0.8, y: 800 }}
						transition={{ type: "spring", stiffness: 100, damping: 8, duration: 10 }}>
						<div
							onClick={() => {
								setFormOpen(false)
							}}
							className='h-full w-full'></div>
						<form className='def-theme def-form'>
							<div className='gap-[1vh] flex flex-col justify-center items-center'>
								<label htmlFor='text'>CARD ID</label>
								<input
									id='text'
									className='input-hover'
									required
									maxLength={64}
									type='text'
									title='Only letters allowed'
									onChange={(event) => {
										inputHandler(event, 1)
									}}
								/>
							</div>
							<div className='gap-[1vh] flex flex-col justify-center items-center'>
								<label htmlFor='textarea'>REPORT COMPLAINT</label>
								<textarea
									id='textarea'
									className='p-[2vmin] h-[20ch] resize-none input-hover'
									onChange={(event) => {
										inputHandler(event, 2)
									}}></textarea>
							</div>
							<motion.button
								onClick={() => {
									onSubmit()
								}}
								className='mt-[1em] px-[2em] py-[0.75em] w-[16ch] button-hover'
								whileTap={{ scale: 0.9 }}
								whileHover={{ scale: 1.1 }}
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
