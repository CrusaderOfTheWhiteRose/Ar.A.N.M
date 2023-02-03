import { gql } from "@apollo/client"

export const DELETE_CARD = gql`
	mutation deleteCard($id: String!){
  		deleteCard(id: $id)
	}
`
