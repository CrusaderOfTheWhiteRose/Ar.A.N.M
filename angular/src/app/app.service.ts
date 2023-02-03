import { Injectable } from "@angular/core"
import { Router } from "@angular/router"

@Injectable({
	providedIn: "root",
})
export class AppService {
	constructor(private router: Router) {}
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
		localStorage.removeItem("jwtToken")
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
}
