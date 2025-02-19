// TEMPORARY: Dummy database. Replace it with a real one in the future.
import { hashPassword } from "../utils/hash"

async function initializeDB() {
    const hashedPassword = await hashPassword("password123");
    fakeDB.users.push({ email: "test@email.com", password: hashedPassword })
}

export const fakeDB = {
    users: [] as { email: string, password: string }[],
};

initializeDB().then(() => console.log("fakeDB initialized"));