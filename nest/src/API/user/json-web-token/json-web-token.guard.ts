import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from "@nestjs/passport"
import { Observable } from 'rxjs';

@Injectable()
//This is just script which return "true" or "false"
export class JsonWebTokenGuard extends AuthGuard("JWT") {
	CanActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
		//Asks for request content
		const request = context.switchToHttp().getRequest();
		//It passes or no
		return this.validateRequest(request);
	}
	validateRequest(request: any) {
		//Just to look what those hUmans want from my server
		console.log(request)
		//If they do not want to make things bad then pass
		if(request == "Make Things Bad") {
			return false
		} else {
			return true
		}
	}
}
