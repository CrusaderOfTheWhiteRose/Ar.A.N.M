import { gql } from "@apollo/client"

export const UPDATE_CARD = gql`
	mutation updateCard($id: String!, $upper: String!, $center: String!, $bottom: String!){
		updateCard(
			id: $id,
			update: {
				upper: $upper,
				center: $center,
				bottom: $bottom
			}
		)
	}
`
