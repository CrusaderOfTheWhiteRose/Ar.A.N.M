import * as React from "react"
import { motion } from "framer-motion"
import Fire from "./fire"
import AdminUI from "./admin-ui"
import { CardContext } from "../card-box"
import { useInjected } from "@bubblydoo/angular-react"
import { AppService } from "src/app/app.service"

export default function Card() {
	//Its for dragging the card
	const dragZone = React.useRef(null)
	//This is to hide center for cards without center images
	const cardInfo: any = React.useContext(CardContext)
	return (
		<>
			{localStorage.getItem("style") == "block" || localStorage.getItem("style") == undefined ? (
				<div className='relative' ref={dragZone}>
					<motion.div drag dragConstraints={dragZone}>
						{useInjected(AppService).user.permission == true ? <AdminUI /> : null}
						<button
							className='absolute left-0 z-[2] h-8 w-8 shadow-md flex justify-center items-center'
							onClick={() => {
								alert(`Card id: ${cardInfo.id}`)
							}}>
							<motion.svg
								whileHover={{ scale: 1.25 }}
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
									d='M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6'
								/>
							</motion.svg>
						</button>
						<motion.div
							className='shadow-md h-auto max-w-[20rem] p-4 break-keep'
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}>
							<div className='flex flex-row justify-around gap-12'>
								<cite className='font-thin text-[2.8vmax] lg:text-lg translate-x-8 def-theme-text'>{cardInfo.author}</cite>
								<time className='antialiased font-ultraThin text-[2vmax] lg:text-sm def-theme-text'>{cardInfo.time}</time>
							</div>
							<div className='flex align-middle justify-center items-center flex-col'>
								<b><article className='def-theme-text lg:text-4xlg font-official'>{cardInfo.upper}</article></b>
								{cardInfo.center == null ? null : (
									<img
										src={cardInfo.center}
										alt='Card`s Center Image'
										className='object-cover border rounded-md h-[30vh] w-[30vh]'
										onDragStart={(event) => event.preventDefault()}
									/>
								)}
								<article className='font-official def-theme-text lg:text-2xlg'>{cardInfo.bottom}</article>
							</div>
						</motion.div>
						<Fire />
					</motion.div>
				</div>
			) : localStorage.getItem("style") == "list" ? (
				<div className='relative' ref={dragZone}>
					<motion.div drag dragConstraints={dragZone}>
						{useInjected(AppService).user.permission == true ? <AdminUI /> : null}
						<button
							className='absolute z-[2] shadow-md flex justify-center items-center'
							onClick={() => {
								alert(`Card id: ${cardInfo.id}`)
							}}>
							<motion.svg
								whileHover={{ scale: 1.25 }}
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
									d='M16.5 8.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v8.25A2.25 2.25 0 006 16.5h2.25m8.25-8.25H18a2.25 2.25 0 012.25 2.25V18A2.25 2.25 0 0118 20.25h-7.5A2.25 2.25 0 018.25 18v-1.5m8.25-8.25h-6a2.25 2.25 0 00-2.25 2.25v6'
								/>
							</motion.svg>
						</button>
						<motion.div className='shadow-md p-[1em] break-keep' whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
							<div className='flex flex-row justify-center items-center max-w-[42rem]'>
								<div className='flex flex-row'>
									<div className='flex flex-col justify-center align-middle'>
										<b><article className='text-4xlg font-official def-theme-text w-[25vw] lg:w-[14rem]'>{cardInfo.upper}</article></b>
										<article className='text-2xlg font-official def-theme-text w-fill lg:w-[18rem]'>{cardInfo.bottom}</article>
									</div>
									<div>
										{cardInfo.center == null ? null : (
											<img
												src={cardInfo.center}
												alt='Card`s Center Image'
												className='object-cover border rounded-md h-[10vh] w-[10vh]'
												onDragStart={(event) => event.preventDefault()}
											/>
										)}
										<div className='relative top-0 flex flex-col break-keep justify-center items-center'>
											<cite className='font-thin text-md def-theme-text max-w-[4em] overflow-x-clip duration-1000 hover:max-w-[12em]'>
												{cardInfo.author}
											</cite>
											<time className='antialiased font-ultraThin text-sm def-theme-text'>{cardInfo.time}</time>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
						<Fire />
					</motion.div>
				</div>
			) : null}
		</>
	)
}
