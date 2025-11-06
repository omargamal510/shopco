import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const hasAuthCookie = request.cookies.has("authToken");
  const { pathname } = request.nextUrl;

  if (!hasAuthCookie && pathname !== "/login") {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (hasAuthCookie && pathname === "/login") {
    return NextResponse.redirect(new URL("/", request.url));
  }

  // 🔹 في باقي الحالات (يدخل عادي)
  return NextResponse.next();
}

export const config = {
  matcher: [
    "/((?!_next/static|_next/image|favicon.ico|register|forgotPassword|verifyResetCode|resetPassword|api).*)", // ✅ كل الصفحات عدا ملفات النظام
  ],
};
