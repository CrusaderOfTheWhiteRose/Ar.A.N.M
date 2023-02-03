import { useQuery } from "@apollo/client"
import { useInjected } from "@bubblydoo/angular-react"
import { motion } from "framer-motion"
import * as React from "react"
import { AppService } from "../app.service"
import { LOGIN_USER } from "../API/users/login.users"

export function LogInComponent() {
	//Variables to send
	let email = "",
		password = "",
		rememberMe = false
	//All the inputs in one place is good practice
	function inputHandler(event: any, inputNum: number) {
		switch (inputNum) {
			case 2:
				email = event.target.value
				break
			case 3:
				password = event.target.value
				break
			case 4:
				rememberMe = event.target.value
				break
		}
	}
	//To switch visible/invisible password
	const [passwordInvicible, setPasswordInvicible] = React.useState(true)
	//To rerender component on change, then send user to the place
	const [RouteCall, makeRouteCall] = React.useState("")
	//Data that will be delivered to the page
	const { data, error } = useQuery(LOGIN_USER, { variables: { email, password } })
	//If there is no errors
	if (error == undefined) {
		useInjected(AppService).Refresh(data.logIn.name, data.logIn.permission)
		if (rememberMe != false) {
			useInjected(AppService).ResponseToken(email)
		}
	}
	//Send user to home page
	useInjected(AppService).CallRoute(RouteCall)
	//Just what to do on submit, i do not like the HTML one, so will it be so
	function onSubmit() {
		event!.preventDefault()
		if (error) {
			return
		}
		makeRouteCall("Home")
	}
	return (
		<form className='lg:mt-6 lg:px-[0.5em] lg:py-[2em] shadow-none lg:shadow-md relative flex flex-col gap-[4vh]'>
			<div className='flex flex-col justify-center align-middle items-center'>
				<label htmlFor='email' className='def-theme-text'>
					Email
				</label>
				<input
					id='email'
					type='email'
					className='def-theme-text input-hover'
					placeholder='blobens@gman.com'
					onChange={(event) => {
						inputHandler(event, 2)
					}}
				/>
			</div>
			<div className='flex flex-col justify-center align-middle items-center'>
				<label htmlFor='password' className='def-theme-text'>
					Password
				</label>
				<div className='flex flex-row'>
					{passwordInvicible == true ? (
						<input
							id='password'
							type='password'
							className='def-theme-text input-hover'
							placeholder='********'
							onChange={(event) => {
								inputHandler(event, 3)
							}}
						/>
					) : passwordInvicible == false ? (
						<input
							id='password'
							type='text'
							className='def-theme-text input-hover'
							placeholder='7#hbEo2C'
							onChange={(event) => {
								inputHandler(event, 3)
							}}
						/>
					) : null}
					<button
						className=''
						onClick={() => {
							event!.preventDefault()
							setPasswordInvicible(!passwordInvicible)
						}}>
						{passwordInvicible == true ? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='small-svg'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88'
								/>
							</svg>
						) : passwordInvicible == false ? (
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={1.5}
								stroke='currentColor'
								className='small-svg'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z'
								/>
								<path strokeLinecap='round' strokeLinejoin='round' d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
							</svg>
						) : null}
					</button>
				</div>
			</div>
			<div className='flex justify-center items-center flex-col gap-[2vh] lg:gap-0'>
				<div className='flex flex-row items-center'>
					<input
						id='checkbox'
						type='checkbox'
						className='h-[6vh] w-[6vh] lg:w-[2vh] lg:h-[2vh]'
						onChange={(event) => {
							inputHandler(event, 4)
						}}
					/>
					<label htmlFor='checkbox' className='def-theme-text'>
						Remember Me
					</label>
				</div>
				<motion.button
					onClick={() => {
						onSubmit()
					}}
					className='px-[2vm] py-[2vh] lg:px-[1em] lg:py-[0.5em] w-[80vw] lg:w-[14em] def-theme-text button-hover'
					whileTap={{ scale: 0.8 }}
					whileHover={{ scale: 1.2 }}
					transition={{ type: "spring", stiffness: 400, damping: 10 }}>
					SUBMIT
				</motion.button>
			</div>
		</form>
	)
}
