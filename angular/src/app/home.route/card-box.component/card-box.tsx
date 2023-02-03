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
	}
	return (
		//Grabs all the body
		<main className='def-theme-back w-screen h-screen'>
			//This component is to prevent making things like that "cardInfo.cardInfo.cardInfo.fire"
			<CardContext.Provider value={allCard}>
				//Its the card, nothing special
				<Card key={allCard.id} />
			</CardContext.Provider>
		</main>
	)
}
