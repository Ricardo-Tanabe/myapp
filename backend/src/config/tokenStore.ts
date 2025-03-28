const invalidatedTokens = new Set<string>();

export const addInvalidToken = (token: string) => {
    if (!token || typeof token !== "string") {
        throw new Error("Invalid token: must be a non-empty string.");
    }
    invalidatedTokens.add(token);
}

export const isTokenInvalid = (token: string) => {
    if (!token || typeof token !== "string") {
        return false;
    }
    return invalidatedTokens.has(token);
}