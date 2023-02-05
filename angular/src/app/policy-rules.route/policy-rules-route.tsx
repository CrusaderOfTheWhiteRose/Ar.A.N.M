import { useInjected } from "@bubblydoo/angular-react"
import { motion, AnimatePresence } from "framer-motion"
import * as React from "react"
import { AppService } from "../app.service"

export default function ParagraphTab() {
	//Selected article
	const [selectedTab, setSelectedTab] = React.useState(1)
	//If `true` then sends user back to home page
	const [sendHome, setSendHome] = React.useState(false)
	return (
		<>
			{sendHome == true ? useInjected(AppService).CallRoute("Home") : null}
			<div className='top-0 lg:bottom-0 lg:top-auto fixed p-[0px] m-[0px] lg:px-[1.4em] lg:py-[1em] lg:m-[0.6em] w-screen h-[10vh] lg:w-[28ch] lg:h-auto shadow-md def-theme-back flex flex-row lg:flex-col justify-center align-middle items-center'>
				<motion.button
					className='flex justify-center items-center text-[1em] px-[0.6em] py-[0.4em] w-fill h-fill lg:w-[92%] lg:h-[20%] shadow-md def-theme-back def-theme-text'
					whileTap={{ scale: 0.8 }}
					whileHover={{ scale: 1.2 }}
					transition={{ type: "spring", stiffness: 400, damping: 10 }}
					onClick={() => {
						setSelectedTab(1)
					}}>
					Help
				</motion.button>
				<motion.button
					className='flex justify-center items-center text-[1em] px-[0.6em] py-[0.4em] w-fill h-fill lg:w-[92%] lg:h-[20%] shadow-md def-theme-back def-theme-text'
					whileTap={{ scale: 0.8 }}
					whileHover={{ scale: 1.2 }}
					transition={{ type: "spring", stiffness: 400, damping: 10 }}
					onClick={() => {
						setSelectedTab(2)
					}}>
					Rules
				</motion.button>
				<motion.button
					className='flex justify-center items-center text-[1em] px-[0.6em] py-[0.4em] w-fill h-fill lg:w-[92%] lg:h-[20%] shadow-md def-theme-back def-theme-text'
					whileTap={{ scale: 0.8 }}
					whileHover={{ scale: 1.2 }}
					transition={{ type: "spring", stiffness: 400, damping: 10 }}
					onClick={() => {
						setSelectedTab(3)
					}}>
					Private Policy
				</motion.button>
				<motion.button
					className='font-funny mt-[0.2em] flex justify-center items-center text-[1em] px-[0.6em] py-[0.4em] w-fill h-fill lg:w-[92%] lg:h-[20%] shadow-md text-transparent bg-clip-text bg-gradient-to-r from-[#67e8f9] to-[#f472b6] dark:from-[#80ffdb] dark:to-[#7400b8]'
					whileTap={{ scale: 0.8 }}
					whileHover={{ scale: 1.2 }}
					transition={{ type: "spring", stiffness: 400, damping: 10 }}
					onClick={() => {
						setSendHome(true)
					}}>
					Back To HomePage
				</motion.button>
			</div>
			<div className='mt-[10vh] lg:m-[0px] h-screen w-screen flex justify-center lg:items-center'>
				<div className='p-[0px] lg:px-[6em] lg:py-[3em] w-[120ch] shadow-lg'>
					<AnimatePresence>
						<motion.main
							key={selectedTab}
							initial={{ y: 100, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							exit={{ y: -100, opacity: 0, position: "absolute" }}
							transition={{ duration: 0.4 }}>
							{selectedTab == 1 ? (
								<article className='flex flex-col gap-[1vmin] lg:gap-[2em]'>
									<div>
										<h1 className='font-official def-h1'>What Is Card?</h1>
										<h2 className='font-official def-h2'>
											Card is post which constructed with the uppertext (header), image in center and bottomtext (main
											text). Cards can be created, updated and deleted. Also every card have it own id and rating
											(fire)
										</h2>
									</div>
									<div>
										<h1 className='font-official def-h1'>How To Create Card?</h1>
										<h2 className='font-official def-h2'>There is button on the home page header. You must be logged in to post</h2>
									</div>
									<div>
										<h1 className='font-official def-h1'>How To Report Card?</h1>
										<h2 className='font-official def-h2'>
											Use button on left-upeer corner of the post to copy id. Then press report button to open the
											form. Fill the id field with the id and write the reason, then press "submit" button
										</h2>
									</div>
									<div>
										<h1 className='font-official def-h1'>How To Delete/Update Card?</h1>
										<h2 className='font-official def-h2'>There is no way to delete or update card. Ask administration for it</h2>
									</div>
								</article>
							) : selectedTab == 2 ? (
								<article className='flex flex-col gap-[1vmin] lg:gap-[2em]'>
									<div>
										<h1 className='font-official def-h1'>What You Should Not Post?</h1>
										<h2 className='font-official def-h2'>
											NSFW content and it will be so antil the next accident. Days since last accident 34
										</h2>
									</div>
								</article>
							) : selectedTab == 3 ? (
								<article className='flex flex-col gap-[1vmin] lg:gap-[2em]'>
									<div>
										<h1 className='font-official def-h1'>What Kind Of Information Do We Collect?</h1>
										<h2 className='font-official def-h2'>Nothing. Really, i do not need your browser history</h2>
									</div>
									<div>
										<h1 className='font-official def-h1'>Where Are The Cookies And Tokens Stored?</h1>
										<h2 className='font-official def-h2'>In localstorage. cntr-shift-i then choose addon and delete them</h2>
									</div>
									<div>
										<h1 className='font-official def-h1'>How To Disable The Cookies And Tokens?</h1>
										<h2 className='font-official def-h2'>Just do not use Theme/Style and RememberMe feathers</h2>
									</div>
								</article>
							) : null}
						</motion.main>
					</AnimatePresence>
				</div>
			</div>
		</>
	)
}
