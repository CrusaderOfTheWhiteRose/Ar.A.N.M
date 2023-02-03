import { gql } from "@apollo/client"

export const LOGIN_USER = gql`
	query logIn($email: String!, $password: String!) {
		logIn(email: $email, password: $password) {
    		name
    		permission
		}
	}
`
