// middleware.ts
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { jwtVerify } from "jose";

const verifyJWT = async (token: string, secret: string) => {
  try {
    const { payload } = await jwtVerify(token, new TextEncoder().encode(secret));
    return payload;
  } catch (error) {
    return null;
  }
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // 获取 token
  const tokenCookie = request.cookies.get("token");
  const token = tokenCookie ? tokenCookie.value : null;
  const decoded = await verifyJWT(token, process.env.JWT_SECRET as string);

  // 只对 /admin 和 /admin/dashboard 路径进行处理
  if (pathname === "/admin") {
    if (token) {
      if (!decoded) {
        return null;
      }
      return NextResponse.redirect(new URL("/admin/dashboard", request.url));
    }
  }
  if (pathname === "/admin/dashboard") {
    if (!decoded) {
      const response = NextResponse.redirect(new URL("/admin", request.url));
      response.headers.set("X-Custom-Message", "Please log in to access the dashboard.");
      return response;
    }
    // 如果已在/dashboard页面，且有token，则不进行操作
    return null;
  }

  // 对于非 /admin 路径，不进行处理
  return NextResponse.next();
}

// 匹配 /admin 和 /admin/dashboard 路径
export const config = {
  matcher: ["/admin/:path*"],
};
