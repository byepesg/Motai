import { AuthService } from './auth.service';
export declare class AuthController {
    private authService;
    constructor(authService: AuthService);
    register(email: string, password: string): Promise<import("../users/user.entity").User>;
    login(email: string, password: string): Promise<{
        access_token: string;
    }>;
}
