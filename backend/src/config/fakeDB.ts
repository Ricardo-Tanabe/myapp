// TEMPORARY: Dummy database. Replace it with a real one in the future.
import fs from "fs";
import path from "path";
import { hashPassword } from "../utils/hash"

const dbPath = path.join(process.cwd(), "src", "db.json");

function loadUsers(): { email: string; password: string }[] {
    try {
        const data = fs.readFileSync(dbPath, "utf-8");
        const db = JSON.parse(data);
        return db.users;
    } catch (error) {
        return [];
    }
}

function saveUsers(users: { email: string; password: string }[]) {
    fs.writeFileSync(dbPath, JSON.stringify(users, null, 2));
}

export const fakeDB = {
    users: loadUsers(),
    addUsers: async (email: string, password: string) => {
        const hashedPassword = await hashPassword(password);
        const newUser = { email, password: hashedPassword};
        fakeDB.users.push(newUser);
        saveUsers(fakeDB.users);
    },
    findUser: (email: string) => fakeDB.users.find((u) => u.email === email),
};