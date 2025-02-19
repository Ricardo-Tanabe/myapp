// TEMPORARY: Dummy database. Replace it with a real one in the future.
import { hashPassword } from "../utils/hash"

export const fakeDB = {
    users: [] as { email: string, password: string }[],
};

async function initializeDB() {
    const hashedPassword = await hashPassword("password123");
    fakeDB.users.push({ email: "test@email.com", password: hashedPassword })
}

initializeDB().then(() => console.log("fakeDB initialized"));