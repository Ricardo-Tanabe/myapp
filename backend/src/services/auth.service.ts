import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

const users = [{ email: "teste@email.com", password: bcrypt.hashSync("123456", 10) }];

class AuthService {
    static async login(email: string, password: string) {
        const user = users.find((u) => u.email === email);
        if(!user || !(await bcrypt.compare(password, user.password))) {
            return null;
        }

        const token = jwt.sign({ email }, process.env.JWT_SECRET as string, {
            expiresIn: "1h",
        });

        return token;
    }
}

export default AuthService;