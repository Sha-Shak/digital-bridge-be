import { IUser, User } from "../models/user.model";


export class userRepository{




 async findUserById(id: string){
   return await User.findById(id);
}

 async findUserByEmail(email:string){
    return await User.findOne({email})
}


 async createuser (data: Partial<IUser>){
    const newUser = new User(data);
    return await newUser.save();
}
}
