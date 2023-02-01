import { Injectable, ExecutionContext } from '@nestjs/common';
import { AuthGuard } from "@nestjs/passport"
import { Observable } from 'rxjs';

@Injectable()
export class JsonWebTokenGuard extends AuthGuard("JWT") {
	CanActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
		const request = context.switchToHttp().getRequest();
		return this.validateRequest(request);
	}
	validateRequest(request: any) {
		console.log(request)
		if(request == "Make Things Bad") {
			return false
		} else {
			return true
		}
	}
}
