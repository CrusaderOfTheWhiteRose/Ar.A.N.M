import { HttpClient, HttpHeaders } from "@angular/common/http"
import { Injectable } from "@angular/core"
import { Router } from "@angular/router"

@Injectable({
	providedIn: "root",
})
export class AppService {
	constructor(private router: Router, private http: HttpClient) {}
	//To change route P.S. href do not work sometimes and i need to route with React components
	CallRoute(navigateTo: string) {
		switch (navigateTo) {
			case "Home":
				navigateTo = ``
				this.router.navigate([navigateTo])
				break
			case "LogSignIn":
				navigateTo = `Log-Sign-In`
				this.router.navigate([navigateTo])
				break
			case "PrivatePolicyRules":
				navigateTo = `Private-Policy-Rules`
				this.router.navigate([navigateTo])
				break
			case "Search":
				navigateTo = `Search`
				this.router.navigate([navigateTo])
				break
		}
	}
	//User info
	user = { name: ``, permission: false }
	//To log out
	LogOut() {
		this.user = { name: ``, permission: false }
		this.DeleteToken()
		location.reload()
	}
	//If user is logged in and sends him to log in first
	CheckLoggedIn() {
		if (this.user.name == ``) {
			this.CallRoute("LogSignIn")
		}
	}
	//To refresh user's name and permissions after loggin/signning
	Refresh(name: string, permission: boolean) {
		this.user.name = name
		this.user.permission = permission
	}
	//Server url
	uri = "http://localhost:5000"
	//Triggers LogOut function on server, which will make your token unuseble
	DeleteToken() {
		this.http
			.delete(this.uri + "/JWT/LogOut", {
				headers: ({ TokenToDelete: "" + window.localStorage["jwtToken"] }),
			})
			.subscribe(
				(res: any) => {
					this.Refresh(res.name, res.permission)
				},
				(err: any) => {
					console.log(err)
				}
			)
		localStorage.removeItem("jwtToken")
	}
	//Ask for information if your token match needed options
	RequestToken() {
		this.http
			.get(this.uri + "/JWT/Verify", {
				headers: new HttpHeaders({ Authorization: "Bearer " + window.localStorage["jwtToken"] }),
			})
			.subscribe(
				(res: any) => {
					this.Refresh(res.name, res.permission)
				},
				(err: any) => {
					console.log(err)
				}
			)
	}
	//Trigger that to create a token
	ResponseToken(email: string) {
		this.http.post(this.uri + "/JWT/LogIn", { email }).subscribe(
			(res: any) => {
				window.localStorage.setItem("jwtToken", res.TheToken)
			},
			(err) => {
				console.log(err)
			}
		)
	}
}
