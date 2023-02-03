import { gql } from "@apollo/client"

export const FIRE_CARD = gql`
	mutation fireCard($id: String!, $fire: Boolean!, $name: String!){
		fireCard(
			id: $id,
			fire: $fire,
			name: $name
		)
	}
`
