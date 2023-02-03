import { Injectable } from "@angular/core"
import { Router } from "@angular/router"

@Injectable({
	providedIn: "root",
})
export class AppService {
	constructor(private router: Router) {}
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
	user = { name: ``, permission: false }
	LogOut() {
		this.user = { name: ``, permission: false }
		localStorage.removeItem("jwtToken")
	}
	CheckLoggedIn() {
		if (this.user.name == ``) {
			this.CallRoute("LogSignIn")
		}
	}
	Refresh(name: string) {
		this.user.name = name
	}
}
