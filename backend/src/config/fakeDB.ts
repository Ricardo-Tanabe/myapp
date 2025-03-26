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
        return [];
    }
}

function saveUsers(users: User[]) {
    fs.writeFileSync(dbPath, JSON.stringify(users, null, 2));
}

export const fakeDB = {
    users: loadUsers(),
    addUsers: async ({id, email, password, role = "user"}: User) => {
        const hashedPassword = await hashPassword(password);
        const newUser = { id, email, password: hashedPassword, role};
        fakeDB.users.push(newUser);
        saveUsers(fakeDB.users);
    },
    findUser: (email: string) => fakeDB.users.find((u) => u.email === email)
};