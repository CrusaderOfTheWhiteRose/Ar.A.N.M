import { gql } from "@apollo/client"

export const SIGNIN_USER = gql`
mutation signIn(
		$name: String!,
		$email: String!,
		$password: String!,
	) {
		signIn(
			user: {
				name: $name,
				email: $email,
				password: $password
			}
		)
	}
`