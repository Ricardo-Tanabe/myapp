const invalidatedTokens = new Set<string>();

export const addInvalidToken = (token: string) => {
    invalidatedTokens.add(token);
}

export const isTokenInvalid = (token: string) => {
    return invalidatedTokens.has(token);
}