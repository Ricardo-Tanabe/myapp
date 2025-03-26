import { generateToken, generateRefreshToken } from "../utils/jwt";
import { fakeDB } from "../config/fakeDB";
import { comparePassword } from "../utils/hash"

class AuthService {
    static async register(email: string, password: string) {
        // TEMPORARY: Users are being stored in memory.
        // When a database is added, remove this logic.
        if(fakeDB.findUser(email)) {
            console.log("User already exists");
            throw new Error("User already exists");
        }
        const userID = fakeDB.users.length + 1;
        await fakeDB.addUsers({ id: userID ,email: email, password: password, role: "user"});
    }

    static async login(email: string, password: string) {
        const user = fakeDB.findUser(email);
        if(!user || !(await comparePassword(password, user.password))) {
            console.log("Credenciais inválidas")
            throw new Error("Invalid credentials");
        }

        const payload = { userId: email, role: user.role}

        return {
            // Add unique identifier after implementing the database
            // by replacing email
            token: generateToken(payload),
            refreshToken: generateRefreshToken(payload),
        };
    }
}

export default AuthService;