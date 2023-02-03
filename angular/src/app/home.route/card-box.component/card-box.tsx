import { useQuery } from "@apollo/client"
import { Reorder } from "framer-motion"
import * as React from "react"
import { GET_CARDS } from "src/app/API/cards/get.cards"
import Card from "./card/card"

//This is what my clidrens will get - nothing, until its runs
export const CardContext = React.createContext<any>(undefined)

export default function CardBox() {
	//Gets all the cards
	const { loading, error, data } = useQuery(GET_CARDS)
	//While loads
	if (loading)
		return (
			<div className='w-screen h-screen flex justify-center items-center def-theme-text def-h1'>
				<div>(ﾉ◕ヮ◕)ﾉ*:･ﾟ✧</div>
			</div>
		)
	//If something will go wrong
	if (error)
		return (
			<div className='w-screen h-screen flex justify-center items-center def-theme-text def-h1'>
				<div>(╯°□°）╯︵ ┻━┻</div>
			</div>
		)
	return (
		<main className='gap-[4vmax] lg:p-12 lg:gap-12 w-screen flex flex-wrap-reverse'>
			<Reorder.Group axis='y' values={data} onReorder={data}>
				{data.allCard.map((card: any) => (
					<Reorder.Item key={card.id} value={card}>
						<CardContext.Provider value={card}>
							<Card key={card.id} />
						</CardContext.Provider>
					</Reorder.Item>
				))}
			</Reorder.Group>
		</main>
	)
}
