import { Credentials } from "../types/auth";
import { User } from "../types/user";

class AuthService {
    async login({ password, userId }: Credentials): Promise<User | undefined> {
        try {
            if (password === '123ert' && userId === "temp@gmail.com") {
                const res = await fetch("https://randomuser.me/api/");
                const data = await res.json();
                const user: User = {
                    userName: data.results[0].name.first,
                    avatar: data.results[0].picture.thumbnail ,
                    role: data.results[0].gender
                }
                return user
            } else {
                throw new Error("incorrect credentials");
            }
        } catch (error) {
            console.error(error)
            return;
        }
    }
}

export default new AuthService()
