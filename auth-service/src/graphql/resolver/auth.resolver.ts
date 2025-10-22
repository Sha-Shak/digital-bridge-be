import { User } from '../../models/user.model';
import { AuthContext } from '../../types/types';

export const authResolvers = {
    Query:{
        me: async(parent: unknown, args: never, context: AuthContext)=>{
            const user = context.user;
            if (!user) throw new Error("Not authenticated");
            return await User.findById(user.id);
        }
    },

    Mutation: {
        login: (parent: unknown, args: {email: string, password: string}, context: AuthContext) => {
            const {email, password} = args;

        }
    }
}