// TEMPORARY: Dummy database. Replace it with a real one in the future.
import fs from "fs";
import path from "path";
import { hashPassword } from "../utils/hash"

interface User {
    email: string,
    password: string,
    role: "user" | "admin"
}

const dbPath = path.join(process.cwd(), "src", "db.json");

function loadUsers(): User[] {
    try {
        const data = fs.readFileSync(dbPath, "utf-8");
        const db = JSON.parse(data);
        return db.users;
    } catch (error) {
        return [];
    }
}

function saveUsers(users: User[]) {
    fs.writeFileSync(dbPath, JSON.stringify(users, null, 2));
}

export const fakeDB = {
    users: loadUsers(),
    addUsers: async ({email, password, role = "user"}: User) => {
        const hashedPassword = await hashPassword(password);
        const newUser = { email, password: hashedPassword, role};
        fakeDB.users.push(newUser);
        saveUsers(fakeDB.users);
    },
    findUser: (email: string) => fakeDB.users.find((u) => u.email === email),
};