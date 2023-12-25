//This is the middleware file to protect routes across the application


import { NextResponse } from "next/server";

export function middleware(request) { 
  const path = request.nextUrl.pathname;

  const isPublicPath = path === "/login" || path === "/register";

  const token = request.cookies.get("connect.sid")?.value || "";   // getting the token from cookies

  if (isPublicPath && token) {  // If there is a token and user is accesing public routes like login and register redirect them to homepage
    return NextResponse.redirect(new URL("/", request.nextUrl));
  }

  if (!isPublicPath && !token) {  // If there is no token and user is accesing protected routes redirect them to public route /login
    return NextResponse.redirect(new URL("/login", request.nextUrl));
  }
}

export const config = {
  matcher: [
    '/',
    '/login',
    '/register',
  ]
}
