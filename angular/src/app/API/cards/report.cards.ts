import { gql } from "@apollo/client"

export const REPORT_CARD = gql`
	mutation reportCard($id: String!, $report: String!){
		reportCard(
			id: $id,
			report: $report
		)
	}
`
