import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// This function can be marked `async` if using `await` inside

export function middleware(request:NextRequest) {
  const { pathname } = request.nextUrl;

  // 获取token
  const token = request.cookies.get("token");
  // 只对/admin路径进行处理
  if (pathname === "/admin") {
    if (token) {
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }

    // 如果有token但不在dashboard页面
    return NextResponse.next();
  }
  if (pathname === "/admin/dashboard") {
    if (!token) {
      return NextResponse.redirect(new URL("/admin", request.url));
    }
    // 如果已在/dashboard页面，且有token，则不进行操作
    return null;
  }

  // 对于非/admin路径，不进行处理
  return NextResponse.next();
}
// See "Matching Paths" below to learn more
// export const config = {
//   matcher: "/about/:path*",
// };
