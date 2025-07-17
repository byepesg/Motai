import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
export declare class AuthService {
    private usersService;
    private jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(email: string, password: string): Promise<import("../users/user.entity").User>;
    validateUser(email: string, password: string): Promise<import("../users/user.entity").User>;
    login(email: string, password: string): Promise<{
        access_token: string;
    }>;
}
