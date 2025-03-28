import { generateToken, generateRefreshToken } from "../utils/jwt";
import { fakeDB } from "../config/fakeDB";
import { comparePassword } from "../utils/hash"

class AuthService {
    static async register(email: string, password: string) {
        // TEMPORARY: Users are being stored in memory.
        // When a database is added, remove this logic.
        try {
            if(fakeDB.findUser(email)) {
                console.log("User already exists");
                throw new Error("User already exists");
            }
            const newUser = await fakeDB.addUser({ email: email, password: password, role: "user"});
            return { message: "User registered successfully", userId: newUser.id}
        } catch (error) {
            console.error("Registration error:")
            throw new Error("Error registering user")
        }
    }

    static async login(email: string, password: string) {
        try {
            const user = fakeDB.findUser(email);
            if(!user || !(await comparePassword(password, user.password))) {
                throw new Error("Invalid credentials");
            }
    
            const payload = { userId: email, role: user.role}
    
            return {
                // Add unique identifier after implementing the database
                // by replacing email
                token: generateToken(payload),
                refreshToken: generateRefreshToken(payload),
                message: "Login successful"
            };
        } catch (error) {
            console.error("Login error: ", error);
            throw new Error("Error logging in");
        }
    }
}

export default AuthService;