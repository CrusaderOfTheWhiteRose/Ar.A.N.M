import { gql } from "@apollo/client"

export const CREATE_CARD = gql`
	mutation createCard(
		$author: String!
		$time: String!
		$upper: String!
		$center: String!
		$bottom: String!
	) {
		createCard(
			create: {
				author: $author
				time: $time
				upper: $upper
				center: $center
				bottom: $bottom
				fire: 0
			}
		)
	}
`