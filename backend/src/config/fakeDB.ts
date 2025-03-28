// TEMPORARY: Dummy database. Replace it with a real one in the future.
import fs from "fs";
import path from "path";
import { hashPassword } from "../utils/hash"

interface User {
    id: number,
    email: string,
    password: string,
    role: "user" | "admin"
}

const dbPath = path.join(process.cwd(), "src", "db.json");

function loadUsers(): User[] {
    try {
        if(!fs.existsSync(dbPath)) {
            fs.writeFileSync(dbPath, JSON.stringify([], null, 2));
            return [];
        }
        const data = fs.readFileSync(dbPath, "utf-8");
        const db = JSON.parse(data);
        return db;
    } catch (error) {
        console.error("Error loading users: ", error);
        return [];
    }
}

function saveUsers(users: User[]) {
    try {
        fs.writeFileSync(dbPath, JSON.stringify(users, null, 2));
    } catch (error) {
        console.error("Error saving users: ", error)
    }
}

export const fakeDB = {
    addUser: async ({ email, password, role = "user"}: Omit<User, "id">) => {
        const users = loadUsers();
        const hashedPassword = await hashPassword(password);;

        const newUser = {
            id: users.length > 0 ? Math.max(...users.map(u => u.id)) + 1 : 1, // Generates a unique ID
            email,
            password: hashedPassword,
            role
        }
        users.push(newUser);
        saveUsers(users);
        return newUser;
    },
    findUser: (email: string): User | undefined => {
        const users = loadUsers();
        return users.find((u) => u.email === email);
    }
};