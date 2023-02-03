import { gql } from "@apollo/client"

export const FIND_CARD = gql`
	query findCard($id: String!, $author: String!, $upper: String!, $bottom: String!) {
		findCard(id:$id, author:$author, upper: $upper, bottom:$bottom) {
			id
			author
			time
			upper
			center
			bottom
			fire
		}
	}
`