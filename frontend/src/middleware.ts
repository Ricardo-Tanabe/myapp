import { NextRequest, NextResponse } from "next/server";

export async function middleware(req: NextRequest) {
    const API_URL = "http://localhost:5000/api/auth"

    const res = await fetch(`${API_URL}/me`, {
        headers: {Cookie: req.headers.get("cookie") || ""},
        credentials: "include",
    })

    if(res.status !== 200 && req.nextUrl.pathname.startsWith("/dashboard")) {
        return NextResponse.redirect(new URL("/login", req.url));
    }

    return NextResponse.next()
}

export const config = {
    matcher: ["/dashboard/:path*"]
}