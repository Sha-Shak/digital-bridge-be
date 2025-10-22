import { bcrypt } from 'bcryptjs';
import { userRepository } from "../repositories/user.repository";
import { BadRequestError } from "../utils/error";
import { generateToken } from "../utils/jwt";

export class AuthService{
    private userRepo: userRepository;
    constructor(){
        this.userRepo = new userRepository();
    }

    async signup(email:string, password: string, name: string){
        const existingUser = await this.userRepo.findUserByEmail(email);
        if(existingUser) return new BadRequestError("Email already in use!")

        const hashedPassword = await bcrypt.hash(password, 10);;
        const user = await this.userRepo.createuser({email, name, password:hashedPassword});

        const token = generateToken({id: user.id, email: user.email, roles: user.roles});
        return {token, user};
    }

    async login(email:string, password: string){
        const user = await this.userRepo.findUserByEmail(email);
        if(!user) return new BadRequestError("Invalid email or password!");
        const valid = await bcrypt.compare(password, user.password);
        if(!valid) return new BadRequestError("Invalid email or password!");

    }
}