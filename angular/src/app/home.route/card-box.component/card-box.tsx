import * as React from "react"
import Card from "./card/card"

//This is what my clidrens will get - nothing, until its runs
export const CardContext = React.createContext<any>(undefined)

export default function CardBox() {
	//I am too lazy to use Faker rn
	const allCard = {
		id: "someId",
		author: "someAuthor",
		time: "someTime",
		upper: "someUpper",
		center: "someCenter",
		bottom: "someBottom",
		fire: 0,
	}
	return (
		<main className='gap-[4vmax] lg:p-12 lg:gap-12 w-screen flex flex-wrap-reverse'>
			<CardContext.Provider value={allCard}>
				<Card key={allCard.id} />
			</CardContext.Provider>
		</main>
	)
}
