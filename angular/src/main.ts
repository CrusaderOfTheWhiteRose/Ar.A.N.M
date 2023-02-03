import { platformBrowserDynamic } from "@angular/platform-browser-dynamic"
//
import { AppModule } from "./app/app.module"
//Just starter
function bootstrap() {
	platformBrowserDynamic()
		.bootstrapModule(AppModule)
		.catch((err) => console.error(err))
}
//This is for SSR
if (document.readyState === "complete") {
	bootstrap()
} else {
	document.addEventListener("DOMContentLoaded", bootstrap)
}
