import { Component } from "@angular/core"
import { AngularReactService } from "@bubblydoo/angular-react"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
import * as React from "react"
import { QueryClientProvider } from "react-query"

@Component({
	selector: "app-root",
	templateUrl: "./app.component.html",
})
export class AppComponent {
	constructor(angularReact: AngularReactService) {
		const cache = new InMemoryCache({
			typePolicies: {
				Query: {
					fields: {
						cards: {
							merge(existing: any, incoming: any) {
								return incoming
							},
						},
					},
				},
			},
		})
		const client = new ApolloClient({
			uri: "http://localhost:5000/graphql",
			cache,
		})
		angularReact.wrappers.push(({ children }) => React.createElement(ApolloProvider, { client, children }))
		angularReact.wrappers.push(() => React.createElement(React.StrictMode))
		angularReact.wrappers.push(() => React.createElement(QueryClientProvider))
	}
}
