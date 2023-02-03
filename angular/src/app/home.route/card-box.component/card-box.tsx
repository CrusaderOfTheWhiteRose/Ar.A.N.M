import { useInjected } from "@bubblydoo/angular-react"
import * as React from "react"
import { first } from "rxjs"
import { HomeRouteService } from "../home-route.component.service"
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
		<main className='w-screen flex flex-wrap p-12 gap-12'>
			<CardContext.Provider value={allCard}>
				<Card key={allCard.id} />
			</CardContext.Provider>
		</main>
	)
}
