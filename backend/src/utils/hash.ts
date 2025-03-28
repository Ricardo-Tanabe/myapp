import bcrypt from "bcrypt";

const SALT_ROUNDS = 10;

export const hashPassword = async (password: string): Promise<string> => {
    try {
        return bcrypt.hash(password, SALT_ROUNDS);
    } catch (error) {
        console.error("Error hashing password", error);
        throw new Error("Password hashing failed");
    }
}

export const comparePassword = async (password: string, hashedPassword: string): Promise<boolean> => {
    try {
        return bcrypt.compare(password, hashedPassword);
    } catch (error) {
        console.error("Error comparing password", error);
        throw new Error("Password comparison failed");
    }
}