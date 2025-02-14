import bcrypt from "bcrypt";
import { generateToken, generateRefreshToken } from "../utils/jwt";
import { fakeDB } from "../config/fakeDB";
import jwt from "jsonwebtoken";

const users: { email: string, password: string }[] = [];

class AuthService {
    static async register(email: string, password: string) {
        if(users.find((u) => u.email === email)) {
            throw new Error("User already exists");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        users.push({ email, password: hashedPassword});
    }

    static async login(email: string, password: string) {
        const user = fakeDB.users.find((u) => u.email === email && u.password === password);

        if (user) {
            const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET!, { expiresIn: "15m" });
            const refreshToken = jwt.sign({ email: user.email }, process.env.REFRESH_JWT_SECRET!, { expiresIn: "7d" });

            return { token, refreshToken };
        }

        throw new Error("Credenciais inválidas");

        // if(!user || !(await bcrypt.compare(password, user.password))) {
        //     throw new Error("Invalid credentials");
        // }

        // return {
        //     token: generateToken(email),
        //     refreshToken: generateRefreshToken(email),
        // };
    }
}

export default AuthService;