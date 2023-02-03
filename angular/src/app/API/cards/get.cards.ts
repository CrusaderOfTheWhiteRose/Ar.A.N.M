import { gql } from "@apollo/client"

export const GET_CARDS = gql`
	{
		allCard {
			id
			author
			time
			upper
			center
			bottom
			fire,
			arsons
		}
	}
`