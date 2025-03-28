export const getCookie = (name: string) => {
    const cookies = document.cookie.split("; ");
    const tokenCookie = cookies.find((cookie) => cookie.startsWith(`${name}=`));
    return tokenCookie ? tokenCookie.split("=")[1] : null
}

export const getCsrfToken = async (API_URL: string) => {
    const res = await fetch(`${API_URL}/csrf-token`, {
        credentials: "include",
    });
    const data = await res.json();
    return data.csrfToken;
}
