import bcrypt from "bcrypt";
import { generateToken, generateRefreshToken } from "../utils/jwt";
import { fakeDB } from "../config/fakeDB";
// import jwt from "jsonwebtoken";

const users: { email: string, password: string }[] = [];

class AuthService {
    static async register(email: string, password: string) {
        // TEMPORARY: Users are being stored in memory.
        // When a database is added, remove this logic.
        if(fakeDB.users.find((u) => u.email === email)) {
            throw new Error("User already exists");
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        fakeDB.users.push({ email, password: hashedPassword});
    }

    static async login(email: string, password: string) {
        const user = fakeDB.users.find((u) => u.email === email);
        if(!user || !(await bcrypt.compare(password, user.password))) {
            throw new Error("Invalid credentials");
        }

        return {
            token: generateToken(email),
            refreshToken: generateRefreshToken(email),
        };
    }
}

export default AuthService;