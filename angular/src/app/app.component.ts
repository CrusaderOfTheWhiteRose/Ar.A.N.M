import { Component } from "@angular/core"
import * as React from "react"
//
import { AngularReactService } from "@bubblydoo/angular-react"
import { ApolloClient, ApolloProvider, InMemoryCache } from "@apollo/client"
//
import { AppService } from "./app.service"

@Component({
	selector: "app-root",
	template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
	constructor(private AS: AppService, angularReact: AngularReactService) {
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
			uri: this.AS.uri,
			cache,
		})
		angularReact.wrappers.push(({ children }) => React.createElement(ApolloProvider, { client, children }))
	}
	//I moved function outside to make it look better
	ngOnInit() {
		this.VerifyTheme()
	}
	//Look at cookies and if user have "theme" cookie then sets theme to its value or to user's prefered browser theme
	VerifyTheme() {
		if (localStorage.getItem("theme") == "dark" || window.matchMedia("(prefers-color-scheme: dark)").matches)
			document.documentElement.classList.add("dark")
		if (localStorage.getItem("theme") == "light" || window.matchMedia("(prefers-color-scheme: light)").matches)
			document.documentElement.classList.remove("dark")
	}
}
